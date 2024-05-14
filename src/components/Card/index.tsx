import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevelMedium, RiskLevelText, BrankDiv, CardMainContainer, CardImage, CardTitle, CardSubTitle, AffectedRegions, CardAffectedRegions, RiskLevelHigh, RiskLevelLow, RiskLevelInstutional} from './styles'
 
export const RiskLevel = (props:any) => {
  if(props.risk == 'high') {
    return (
    <RiskLevelHigh>
        <RiskLevelText>{props.risk}</RiskLevelText>
    </RiskLevelHigh>
)}
  else if (props.risk == 'medium') {
    return (
      <RiskLevelMedium>
        <RiskLevelText>{props.risk}</RiskLevelText>
      </RiskLevelMedium>
    )  
  }
  else if (props.risk == 'low') {
    return (
      <RiskLevelLow>
       < RiskLevelText>{props.risk}</RiskLevelText>
      </RiskLevelLow>
    )
  }
  else if (props.risk == 'institutional') {
    return (
      <RiskLevelInstutional>
       < RiskLevelText>{props.risk}</RiskLevelText>
      </RiskLevelInstutional>
    )
  }
}

function Card(props:any) {
  return (
    <>
    <a href="/">
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
    </a>
    </>
  );
}

export default Card;


