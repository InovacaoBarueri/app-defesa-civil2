import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevelMedium, RiskLevelText, BrankDiv, CardMainContainer, CardImage, CardTitle, CardSubTitle, AffectedRegions, CardAffectedRegions, RiskLevelHigh, RiskLevelLow, RiskLevelInstutional} from './styles'
import CardPage from '../../pages/Home';

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
  else if (props.riskLevel == 'Institutional') {
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
    <a href="/cardpage">
      <CardContainer>
        <CardHeaderContainer>
        <RiskLevel riskLevel={props.riskLevel} risk={props.risk}/>
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


