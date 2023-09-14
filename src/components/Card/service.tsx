import React, { useState, useEffect } from 'react';
import Card from './../Card';
import logo from './../../images/logo.png'
import image from './../../images/image01.jfif'

const CardService = () => {
  const data = {
    "alerta": {
      "risk": "Baixo Risco",
      "riskLevel": "Low",
      "title": "Defesa Civil de Barueri é reconhecida por projeto de redução de risco de desastres",
      "subtitle": "A Defesa Civil de Barueri foi reconhecida pela Organização das Nações Unidas (ONU) pelo projeto de prevenção e redução de risco de desastres nas escolas públicas do município",
      "affectedRegions": "Toda a região"
    }
  }
  

  return (
    <Card
      image={image}
      logo={logo}
      risk={data.alerta.risk}
      title={data.alerta.title}
      subtitle={data.alerta.subtitle}
      affectedRegions={data.alerta.affectedRegions}
      riskLevel={data.alerta.riskLevel}
    />
  );
};

export default CardService;
