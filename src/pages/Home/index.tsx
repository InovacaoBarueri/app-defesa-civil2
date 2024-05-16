import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import icon from './../../images/logo.png'
import Card from './../../components/Card';
let risk: string = 'Baixo risco'
let riskLevel: string = 'Low'
let title: string = 'Defesa Civil de Barueri é reconhecida por projeto de redução de risco de desastres'
import Logo from '../../components/Logo';
import CardService from '../../components/Card/service';
import Weather from '../../components/Weather';
import MiniWheater from '../../components/MiniWeather';
let subtitle: string = 'A Defesa Civil de Barueri foi reconhecida pela Organização das Nações Unidas (ONU) pelo projeto de prevenção e redução de risco de desastres nas escolas públicas do município'
let affectedRegions: string = 'Toda a região'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='HeaderContainer'>
          <IonToolbar className='Menu'>
            <Logo/>
            {/*  */}
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MiniWheater/>
        <CardService/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
