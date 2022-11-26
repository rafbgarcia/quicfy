import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react"

import { useLocation } from "react-router-dom"
import { homeSharp } from "ionicons/icons"
import { useAuthenticator } from "@aws-amplify/ui-react"

interface MenuItem {
  url: string
  icon: string
  title: string
}

const items: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: homeSharp,
  },
]

export const Sidebar: React.FC = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const location = useLocation()

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            {user.attributes?.email}
            <IonButton fill="clear" onClick={signOut}>
              Sair
            </IonButton>
          </IonListHeader>
          {items.map((item, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === item.url ? "selected" : ""}
                  routerLink={item.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={item.icon} />
                  <IonLabel>{item.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}
