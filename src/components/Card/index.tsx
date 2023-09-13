import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevel, RiskLevelText, BrankDiv, Logo, CardMainContainer, CardImage, CardTitle, CardSubTitle} from './styles'


function Card(props:any) {
  return (
    <>
      <CardContainer>
        <CardHeaderContainer>
          <RiskLevel>
            <RiskLevelText>{props.risk}</RiskLevelText>
          </RiskLevel>
          <BrankDiv></BrankDiv>
          <Logo src={props.logo}/>
        </CardHeaderContainer>
        <CardMainContainer>
          <CardImage src={props.image}/>
          <CardTitle>{props.title}</CardTitle>
          <CardSubTitle>{props.subtitle}</CardSubTitle>
        </CardMainContainer>
      </CardContainer>
    </>
  );
}

export default Card;
