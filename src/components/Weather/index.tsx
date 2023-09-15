import React from 'react';
import { ClimaText, Climate, ClimateContainer, ClimateDay, ClimateIcon, ClimateInformationText, ClimateInformations, CurrentTemperature, GridContainer, MinMaxText } from './styles';

function Weather(props:any) {
  return (
    <>
      <ClimateContainer>
        <GridContainer>
          <ClimaText>Clima</ClimaText>
          <Climate>{props.climate}</Climate>
        </GridContainer>
        <GridContainer>
          <ClimateDay>Agora - {props.currentDay}</ClimateDay>
          <ClimateInformations>
            <ClimateInformationText>
              Chuva: {props.rain} <br />
              Umidade: {props.moisture} <br />
              Vento: {props.wind} 
              </ClimateInformationText>
          </ClimateInformations>
        </GridContainer>

        <CurrentTemperature>{props.currentTemperature} °C</CurrentTemperature>
        <ClimateIcon src={props.climateIcon}/>

        <MinMaxText>
          Min: {props.min} °C <br></br>
          Máx: {props.max} °C
        </MinMaxText>
      </ClimateContainer>
    </>
  );
}

export default Weather;
