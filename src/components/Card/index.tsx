import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevel, RiskLevelText, BrankDiv, Logo, CardMainContainer, CardImage, CardTitle, CardSubTitle, AffectedRegions, CardAffectedRegions} from './styles'


function Card(props:any) {
  return (
    <>
      <CardContainer>
        <CardHeaderContainer>
          <RiskLevel>
            <RiskLevelText>{props.risk}</RiskLevelText>
          </RiskLevel>
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
