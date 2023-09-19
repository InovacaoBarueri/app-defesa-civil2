import axios from 'axios';

interface Previsao {
  currentDay: string;
  currentTemperature: number;
  min: number[];
  max: number[];
  climate: string;
  climateIcon: string;
  rain: any;
  moisture: any;
  wind: number;
}

function getClimateDescription(relativeHumidity: number): string {
  if (relativeHumidity < 40) {
    return "Ensolarado";
  } else if (relativeHumidity < 70) {
    return "Nublado";
  } else {
    return "Chuvoso";
  }
}

export const getPrevisao = async (): Promise<Previsao | null> => {
  try {
    const latitude = -23.5105611;
    const longitude = -46.8761653;

    const resposta = await axios.get<{ current_weather: any, daily: any, hourly: any }>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FSao_Paulo`);

    const dados = resposta.data;

    const resultado: Previsao = {
      currentDay: new Date().toLocaleDateString(),
      currentTemperature: dados.current_weather.temperature,
      min: dados.daily.temperature_2m_min.slice(1, 6).map((value: number) => Math.round(value)),
      max: dados.daily.temperature_2m_max.slice(1, 6).map((value: number) => Math.round(value)),
      climate: getClimateDescription(dados.current_weather.relativehumidity),
      climateIcon: '', // Defina a lógica para determinar o ícone do clima
      rain: dados.current_weather.precipitation,
      moisture: dados.current_weather.relativehumidity,
      wind: Math.round(dados.current_weather.windspeed)
    };

    // Lógica para determinar 'climate' e 'climateIcon' com base nos dados da API

    return resultado;

  } catch (error) {
    console.error(error);
    return null;
  }
}

// Encapsule a chamada da função em uma função assíncrona
async function main() {
  const resultado = await getPrevisao();
}

// Chame a função principal para iniciar a execução
main();
