import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevelMedium, RiskLevelText, BrankDiv, CardMainContainer, CardImage, CardTitle, CardSubTitle, AffectedRegions, CardAffectedRegions, RiskLevelHigh, RiskLevelLow, RiskLevelInstutional} from './styles'

export const RiskLevel = (props:any) => {
  if(props.riskLevel === 'high') {
    return (
    <RiskLevelHigh>
        <RiskLevelText>Risco alto</RiskLevelText>
    </RiskLevelHigh>
)}
  else if (props.riskLevel === 'medium') {
    return (
      <RiskLevelMedium>
        <RiskLevelText>Risco médio</RiskLevelText>
      </RiskLevelMedium>
    )  
  }
  else if (props.riskLevel === 'low') {
    return (
      <RiskLevelLow>
       < RiskLevelText>Risco baixo</RiskLevelText>
      </RiskLevelLow>
    )
  }
  else if (props.riskLevel === 'institutional') {
    return (
      <RiskLevelInstutional>
       < RiskLevelText>institucional</RiskLevelText>
      </RiskLevelInstutional>
    )
  }
}


function Card(props:any) {
  return (
    <>
      <CardContainer>
        <CardHeaderContainer>
        <RiskLevel riskLevel={props.risk}/>
          <BrankDiv></BrankDiv>
        </CardHeaderContainer>
        <CardMainContainer>
          <CardTitle>{props.title}</CardTitle>
          <CardSubTitle>{props.subtitle}</CardSubTitle>
          <CardImage src={props.image}/>
          <CardAffectedRegions><AffectedRegions>Regiões afetadas:  </AffectedRegions>{props.affectedRegions}</CardAffectedRegions>
        </CardMainContainer>
      </CardContainer>
    </>
  );
}

export default Card;


