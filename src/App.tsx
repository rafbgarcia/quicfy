import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Redirect, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Page from "./pages/Page"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

/* App specific */
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { I18n } from "aws-amplify"
import { translations } from "@aws-amplify/ui-react"

import awsExports from "./aws-exports"

Amplify.configure(awsExports)
setupIonicReact()
I18n.putVocabularies(translations)
I18n.setLanguage("pt")
I18n.putVocabularies({
  pt: {
    "Your passwords must match": "As senhas não são iguais",
    Email: "E-mail",
    "Incorrect username or password.": "E-mail ou senha incorretos",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Um código de verificação foi enviado para",
    "Your code is on the way. To log in, enter the code we texted to":
      "Um código de verificação foi enviado para",
    "Your code is on the way. To log in, enter the code we sent you. It may take a minute to arrive.":
      "Enviamos um código de verificação para fazer login. Pode levar um minuto para chegar.",
    "It may take a minute to arrive.": "Pode levar um minuto para chegar.",
  },
})

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <Authenticator initialState="signIn" loginMechanisms={["email"]} variation="modal">
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Page />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </Authenticator>
    </IonApp>
  )
}

export default App
