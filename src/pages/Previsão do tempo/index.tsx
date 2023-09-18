import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import icon from './../../images/logo.png'
import Logo from '../../components/Logo';
import Weather from '../../components/Weather';
import climateIcon from './../../images/cloudy.png'


const AlertasTemperatura: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='HeaderContainer'>
          <IonToolbar className='Menu'>
            <Logo/>
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <Weather/> 
      </IonContent>
    </IonPage>
  );
};

export default AlertasTemperatura;
