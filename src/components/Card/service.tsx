import React, { useState, useEffect } from 'react';
import Card from './../Card';

interface CardData {
  risk: string;
  riskLevel: string;
  title: string;
  subtitle: string;
  affectedRegions: string;
  image: any;
}


const CardService = () => {
  let cards: any[]
  const data: Record<string, CardData> = {    
    "alerta": {
      "image": "https://th.bing.com/th/id/R.4a4e5aa4484b17abb2598f8f25588d86?rik=bQlvzIEUxt549g&pid=ImgRaw&r=0",
      "risk": "Institucional",
      "riskLevel": "Institutional",
      "title": "Defesa Civil de Barueri é reconhecida por projeto de redução de risco de desastres",
      "subtitle": "A Defesa Civil de Barueri foi reconhecida pela Organização das Nações Unidas (ONU).",
      "affectedRegions": "Toda a região"
    }, "alerta2": {
      "image": "https://th.bing.com/th/id/R.d9a332af5b113614abdc96d4f3d112e6?rik=s8bZ0eUlgMM%2fAg&riu=http%3a%2f%2fdiariodealphaville.com.br%2fwordpress%2fwp-content%2fuploads%2f2020%2f02%2falerta-chuva.jpg&ehk=nBk%2btGRf5hneJzaMEDoxSBhOLbkROJagDjGQ4kTFvSo%3d&risl=&pid=ImgRaw&r=0",
      "risk": "Baixo risco",
      "riskLevel": "Low",
      "title": "Chuvas se aproximam na região de Barueri",
      "subtitle": "Nessa tarde pode ocorrer chuvas leves na região de Barueri",
      "affectedRegions": "Toda a região"
    }, "alerta3": {
      "image": "https://th.bing.com/th/id/R.ff3853d2440fc3d9467fbff8a5fc67a4?rik=ZoBT%2bnYu5GlU0A&pid=ImgRaw&r=0",
      "risk": "Medio risco",
      "riskLevel": "Medium",
      "title": "Alerta de rajada de vento a 100km/h",
      "subtitle": "O IBGE detectou risco de fortes rajadas de vento na região do Jd. Belval",
      "affectedRegions": "Jd. Belval"
    },  "alerta4": {
      "image": "https://th.bing.com/th/id/R.1a93d4a3d2bdabbb69b4f594d2e6499b?rik=vMapsZ2BJX%2fD3Q&pid=ImgRaw&r=0",
      "risk": "Alto Risco",
      "riskLevel": "High",
      "title": "Alerta de Furacão",
      "subtitle": "Um furacão de categoria 4 está se aproximando da costa leste de Barueri.",
      "affectedRegions": "Costa Leste de Barueri"
    }
  };
  
  const cardList = [];
  const cardListHighRisk = [];

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      cardList.push(
        <Card
          image={element.image}
          risk={element.risk}
          title={element.title}
          subtitle={element.subtitle}
          affectedRegions={element.affectedRegions}
          riskLevel={element.riskLevel}
          
        />
        );
    }
  }
  
  return (
    <div>
      {cardList}
    </div>
  )
}

export default CardService;
