import React, { useState, useEffect } from 'react';
import Card from './../Card';
import axios from "axios";

const apiUrl = "http://192.168.180.16:3000/api/alerts";
const apiToken = "7857a04d95d0ab9ed424b27d99363b37c0471df8637008edf8c7cb6412e623cfc498521e7cf00727f929d6272cf6d07f68ec818899135d8746bc6804a205802ebabc7fc8691968029963bffdb787853457b26232aa469cb5698df4d97a6be56cc084d3724f73f8424f66971b4cb7b98346d5edef966884847d5c584eff8d1777";

interface Alerta {
  risk: string;
  title: string;
  subtitle: string;
  affectedRegions: string;
  image: string;
}

const InstitucionalCardService = () => {
    const [alertasInstitucionais, setAlertasInstitucionais] = useState<Alerta[]>([]);
  
    useEffect(() => {
      axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
        .then((response) => {
          const institucionais = response.data.filter(alerta => alerta.risk === 'institutional');
          setAlertasInstitucionais(institucionais);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
        {/* Renderizar apenas alertas institucionais */}
        <div>
          {alertasInstitucionais.map((alerta, index) => (
            <Card
              key={index}
              image={alerta.image}
              title={alerta.title}
              subtitle={alerta.subtitle}
              affectedRegions={alerta.affectedRegions}
              risk={alerta.risk}
            />
          ))}
        </div>
      </div>
    );
  };
  
  
export default InstitucionalCardService;