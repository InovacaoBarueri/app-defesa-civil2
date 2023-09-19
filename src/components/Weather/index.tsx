import React from 'react';
import { ClimaText, Climate, ClimateContainer, ClimateDay, ClimateIcon, ClimateInformationText, ClimateInformations, ClimatenInformations2, CurrentTemperature, /* outros componentes */
GridContainer,
GridContainer2,
GridContainer3,
MicroClimateContainer,
MicroClimateIcon,
MicroClimateText,
MicroMinMaxText,
MinMaxText} from './styles';

import { useEffect, useState } from 'react';
import { getPrevisao } from './service'; 

import climateIcon from './../../images/cloudy.png'
import Ion_Progress_Bar from '../IonProgressBar';

interface Previsao {
  currentDay: string;
  currentTemperature: number;
  min: number[];
  max: number[];
  climate: string;
  climateIcon: string;
  rain: any;
  moisture: any;
  wind: number; // Alterado para number[], presumindo que a API retorna um array de números para as temperaturas máximas
}


interface Props {
  climate: string;
  climateIcon: string;
}

export default function Weather() {

  const [previsao, setPrevisao] = useState<Previsao | null>(null);

  useEffect(() => {
    getPrevisao()
      .then(result => setPrevisao(result))
      .catch(error => {
        console.error("Erro ao obter a previsão:", error);
        setPrevisao(null); // Defina como null em caso de erro
      });
  }, []);
  

  if(!previsao) {
    return <Ion_Progress_Bar />
  }
  
  const dataAtual = new Date();

  // Calcule as datas dos próximos 5 dias
  const datasDosProximos5Dias: string[] = [];
  for (let i = 1; i <= 5; i++) {
    const data = new Date(dataAtual);
    data.setDate(data.getDate() + i);
    datasDosProximos5Dias.push(data.toLocaleDateString());
  }
  
  return ( <>
    <ClimateContainer>
      <GridContainer>
        <ClimaText>Clima</ClimaText>
        <Climate>{previsao.climate}</Climate>
      </GridContainer>
      <GridContainer>
        <ClimateDay>Agora - {previsao.currentDay}</ClimateDay>
          <ClimateInformations>
            <ClimateInformationText>
              Chuva: {previsao.rain}mm <br />
              Umidade: {previsao.moisture}% <br />
              Vento: {previsao.wind}km/h 
              </ClimateInformationText>
          </ClimateInformations>
        </GridContainer>

        <GridContainer2>
          <ClimatenInformations2>
            <CurrentTemperature>
              {previsao.currentTemperature} °C
              <MinMaxText>
              Mín: {previsao.min[0]} °C <br></br>
              Máx: {previsao.max[0]} °C
            </MinMaxText>
            </CurrentTemperature>
            
          </ClimatenInformations2>
          <ClimateIcon src={climateIcon}/>
        </GridContainer2>
      </ClimateContainer>

      <GridContainer3>
        <MicroClimateContainer>
          <MicroClimateText>{datasDosProximos5Dias[0]}</MicroClimateText>
            <GridContainer3>
            <MicroMinMaxText>
              Mín: {previsao.min[1]} °C <br></br>
              Máx: {previsao.max[1]} °C
            </MicroMinMaxText>
            <MicroClimateIcon src={climateIcon}/>
            </GridContainer3>
        </MicroClimateContainer>
        <MicroClimateContainer>
          <MicroClimateText>{datasDosProximos5Dias[1]}</MicroClimateText>
            <GridContainer3>
            <MicroMinMaxText>
              Mín: {previsao.min[2]} °C <br></br>
              Máx: {previsao.max[2]} °C
            </MicroMinMaxText>
            <MicroClimateIcon src={climateIcon}/>
            </GridContainer3>
        </MicroClimateContainer>
        <MicroClimateContainer>
          <MicroClimateText>{datasDosProximos5Dias[2]}</MicroClimateText>
            <GridContainer3>
            <MicroMinMaxText>
              Mín: {previsao.min[3]} °C <br></br>
              Máx: {previsao.max[3]} °C
            </MicroMinMaxText>
            <MicroClimateIcon src={climateIcon}/>
            </GridContainer3>
        </MicroClimateContainer>
        <MicroClimateContainer>
          <MicroClimateText>{datasDosProximos5Dias[3]}</MicroClimateText>
            <GridContainer3>
            <MicroMinMaxText>
              Mín: {previsao.min[4]} °C <br></br>
              Máx: {previsao.max[4]} °C
            </MicroMinMaxText>
            <MicroClimateIcon src={climateIcon}/>
            </GridContainer3>
        </MicroClimateContainer>
       
      </GridContainer3>
  </>
  );

}