import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {home } from 'ionicons/icons';
import Home from './pages/Home';

import rainyOutline from './images/rainy-outline.svg'
import thermometerOutline from './images/thermometer-outline.svg';
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

/* Theme variables */
import './theme/variables.css';
import AlertasTempestades from './pages/Alertas tempestades';
import AlertasTemperatura from './pages/Alertas temperaturas';
import AlertasAltoRisco from './pages/Alertas Alto Risco';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/alertatempestade">
            <AlertasTempestades />
          </Route>
          <Route path="/alertatemperatura">
            <AlertasTemperatura />
          </Route>
          <Route path="/alertaltorisco">
            <AlertasAltoRisco />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar color='secondary' slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
          </IonTabButton>
          <IonTabButton tab="alertatempestade" href="/alertatempestade">
            <IonIcon aria-hidden="true" icon={rainyOutline} />
          </IonTabButton>
          <IonTabButton tab="alertatemperatura" href="/alertatemperatura">
            <IonIcon aria-hidden="true" icon={thermometerOutline} />
          </IonTabButton>
          <IonTabButton tab="alertaltorisco" href="/alertaltorisco">
            <IonIcon aria-hidden="true" icon={warmingOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
