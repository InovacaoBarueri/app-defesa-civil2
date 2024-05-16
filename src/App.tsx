import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {home } from 'ionicons/icons';
import Home from './pages/Home';

import thermometerOutline from './images/thermometer-outline.svg';
import folderOpenOutline from './images/folder-open-outline.svg'
import newspaperOutline from './images/newspaper-outline.svg'
import warmingOutline from './images/warning-outline.svg'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './styles.css'

/* Theme variables */
import './theme/variables.css';
import PrevisaoTempo from './pages/Previsão do tempo';
import AlertasAltoRisco from './pages/Alertas Alto Risco';
import CardPage from './pages/CardPage';

import OneSignal from 'onesignal-cordova-plugin';
import HistoricoAlertas from './pages/Historico de Alertas';
import Noticias from './pages/Noticias';

// Call this function when your app starts
function OneSignalInit(): void {
  // Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
  OneSignal.Notifications.requestPermission(true).then((accepted: boolean) => {
    console.log("User accepted notifications: " + accepted);
  });
}

 
OneSignalInit();
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/previsaotempo">
            <PrevisaoTempo />
          </Route>
          <Route path="/historicoalertas">
            <HistoricoAlertas />
          </Route>
          <Route path="/noticias">
            <Noticias />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar color='secondary' slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
          </IonTabButton>
          <IonTabButton tab="noticias" href="/noticias">
            <IonIcon aria-hidden="true" icon={newspaperOutline} />
          </IonTabButton>
          <IonTabButton tab="alertatemperatura" href="/previsaotempo">
            <IonIcon aria-hidden="true" icon={thermometerOutline} />
          </IonTabButton>
          <IonTabButton tab="historicoalertas" href="/historicoalertas">
            <IonIcon aria-hidden="true" icon={folderOpenOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);


export default App;
