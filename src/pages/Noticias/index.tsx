import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import icon from './../../images/logo.png'
import Logo from '../../components/Logo';
import CardService from '../../components/Card/service';
import InstitucionalCardService from '../../components/Card/institucionalService';

const Noticias: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='HeaderContainer'>
          <IonToolbar className='Menu'>
            <Logo/>
            {/* <Weather/> */}
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <InstitucionalCardService/>
      </IonContent>
    </IonPage>
  );
};

export default Noticias;
