import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from './../../images/logo.png'
import Card from './../../components/Card';
let risk: string = 'Baixo risco'
let title: string = 'Defesa Civil de Barueri é reconhecida por projeto de redução de risco de desastres'
import image from './../../images/image01.jfif'
let subtitle: string = 'A Defesa Civil de Barueri foi reconhecida pela Organização das Nações Unidas (ONU) pelo projeto de prevenção e redução de risco de desastres nas escolas públicas do município'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>Alertas</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Card risk={risk} logo={logo} image={image} title={title} subtitle={subtitle}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
