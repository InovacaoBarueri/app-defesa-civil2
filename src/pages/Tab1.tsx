import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import logo from './../../src/images/logo.png'
import Card from '../components/Card';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Alertas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Card/>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
