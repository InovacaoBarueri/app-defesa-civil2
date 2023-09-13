import React from 'react';
import {CardContainer, CardHeaderContainer, RiskLevel, RiskLevelText, BrankDiv, Logo, CardMainContainer, CardImage, CardTitle, CardSubTitle} from './styles'
import logo from './../../images/logo.png'
import image from './../../images/image01.jfif'

function Card() {
  return (
    <>
      <CardContainer>
        <CardHeaderContainer>
          <RiskLevel>
            <RiskLevelText>Baixo Risco</RiskLevelText>
          </RiskLevel>
          <BrankDiv></BrankDiv>
          <Logo src={logo}/>
        </CardHeaderContainer>
        <CardMainContainer>
          <CardImage src={image}/>
          <CardTitle>Defesa Civil de Barueri é reconhecida por projeto de redução de risco de desastres</CardTitle>
          <CardSubTitle>A Defesa Civil de Barueri foi reconhecida pela Organização das Nações Unidas (ONU) pelo projeto de prevenção e redução de risco de desastres nas escolas públicas do município.</CardSubTitle>
        </CardMainContainer>
      </CardContainer>
    </>
  );
}
export default Card;