import axios from 'axios';
const API_KEY = '93d41ffc1a0f4b8f9ef101056252402';
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

const getWeather = async (location: string, lat?: number, lon?: number) => {
  try {
    const query = location ? location : `${lat},${lon}`;
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        days: 7,
        aqi: 'no',
        alerts: 'no',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getWeather;
