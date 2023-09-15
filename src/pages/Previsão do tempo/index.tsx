import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import icon from './../../images/logo.png'
import Logo from '../../components/Logo';
import Weather from '../../components/Weather';
import climateIcon from './../../images/cloudy.png'
let currentDay: string = 'Sexta-Feira, dia 15'
let currentTemperature: number = 22
let min: number = 16
let max: number = 27
let climate: string = 'Ensolarado'

const AlertasTemperatura: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='HeaderContainer'>
          <IonToolbar className='Menu'>
            <Logo/>
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Weather currentDay={currentDay} currentTemperature={currentTemperature} min={min} max={max} climate={climate} climateIcon={climateIcon}/> 
      </IonContent>
    </IonPage>
  );
};

export default AlertasTemperatura;
