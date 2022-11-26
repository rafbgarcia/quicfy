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

const randomCode = () => {
  return Math.random().toString().split(".")[1].slice(0, 6)
}

export const Dashboard: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateChargeInput>({ defaultValues: { expiresAt: "5" } })

  const onSubmit: SubmitHandler<CreateChargeInput> = async (input) => {
    input.expiresAt = formatISO(addMinutes(new Date(), parseInt(input.expiresAt!)))
    input.code = randomCode()
    console.log(input)

    API.graphql({ query: createCharge, variables: { input } })
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
            <IonInput type="number" {...register("amount")} />
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
