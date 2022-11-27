import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { API } from "aws-amplify"
import { useForm, SubmitHandler } from "react-hook-form"
import { CreateChargeInput } from "../API"
import addMinutes from "date-fns/addMinutes"
import formatISO from "date-fns/formatISO"
import { createCharge } from "../graphql/mutations"
import { useEffect } from "react"

const randomCode = () => {
  return Math.random().toString().split(".")[1].slice(0, 6)
}

const currencyToInt = (value: string) => parseInt(value.replace(/[^\d]/g, ""), 10)

const formatCurrency = (value: string) => {
  if (value === "") {
    value = "0"
  }
  let val = currencyToInt(value)
  if (val > 100000_00) {
    val = 99999_99
  }

  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(val / 100)
}

export const Dashboard: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateChargeInput>({ defaultValues: { expiresAt: "5", amount: 0 } })

  const onSubmit: SubmitHandler<CreateChargeInput> = async (input) => {
    input.expiresAt = formatISO(addMinutes(new Date(), parseInt(input.expiresAt!)))
    input.temporaryCode = randomCode()
    input.amount = currencyToInt(input.amount.toString())

    console.log(input)

    API.graphql({
      query: createCharge,
      variables: { input, condition: { temporaryCode: { ne: input.temporaryCode } } },
    })
  }

  const { onChange, ...amountRegister } = register("amount")
  const handleChangeAmount = (e: any) => {
    e.target.value = formatCurrency(e.target.value)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isValid && JSON.stringify(errors)}
          <IonItem>
            <IonLabel position="stacked">Está cobrança refere-se a:</IonLabel>
            <IonTextarea
              autoGrow
              placeholder="Descreva o produto ou serviço"
              rows={2}
              {...register("description")}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Valor (R$)</IonLabel>
            <IonInput type="text" {...amountRegister} onIonChange={handleChangeAmount} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Expira em (minutos)</IonLabel>
            <IonInput type="number" {...register("expiresAt")} />
          </IonItem>
          <IonButton type="submit">Gerar Cobrança</IonButton>
        </form>
      </IonContent>
    </IonPage>
  )
}
