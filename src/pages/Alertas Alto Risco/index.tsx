import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import icon from './../../images/logo.png'
import Logo from '../../components/Logo';
import CardHighLevelRiskService from '../../components/Card/service';
const AlertasAltoRisco: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='HeaderContainer'>
          <IonToolbar className='Menu'>
            <Logo/>
            {/* <Weather/> */}
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CardHighLevelRiskService/>
      </IonContent>
    </IonPage>
  );
};

export default AlertasAltoRisco;
