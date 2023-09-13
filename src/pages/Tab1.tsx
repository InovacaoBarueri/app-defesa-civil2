import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import logo from './../../src/images/logo.png'
import Card from '../components/Card';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>Alertas</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Card></Card>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
