import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevelMedium, RiskLevelText, BrankDiv, Logo, CardMainContainer, CardImage, CardTitle, CardSubTitle, AffectedRegions, CardAffectedRegions, RiskLevelHigh, RiskLevelLow} from './styles'

export const RiskLevel = (props:any) => {
  if(props.riskLevel == 'High') {
    return (
    <RiskLevelHigh>
        <RiskLevelText>{props.risk}</RiskLevelText>
    </RiskLevelHigh>
)}
  else if (props.riskLevel == 'Medium') {
    return (
      <RiskLevelMedium>
        <RiskLevelText>{props.risk}</RiskLevelText>
      </RiskLevelMedium>
    )  
  }
  else if (props.riskLevel == 'Low') {
    return (
      <RiskLevelLow>
       < RiskLevelText>{props.risk}</RiskLevelText>
      </RiskLevelLow>
    )
  }
}

function Card(props:any) {
  return (
    <>
      <CardContainer>
        <CardHeaderContainer>
        <RiskLevel riskLevel={props.riskLevel} risk={props.risk}/>
          <BrankDiv></BrankDiv>
          <Logo src={props.icon}/>
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
