import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import icon from './../../images/logo.png'
import Logo from '../../components/Logo';

const AlertasTemperatura: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='HeaderContainer'>
          <IonToolbar className='Menu'>
            <Logo/>
            {/* <Weather/> */}
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default AlertasTemperatura;
