import { useEffect, useState } from 'react';
import getWeather from './getWeatherService';
import getLocation from './getLocation';
import {
  IWeatherMain,
  IWeatherDetails,
  IWeatherForecastDay,
} from '../types/types';

const useWeather = () => {
  const [weather, setWeather] = useState<IWeatherMain | null>(null);
  const [details, setDetails] = useState<IWeatherDetails | null>(null);
  const [forecast, setForecast] = useState<IWeatherForecastDay[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const location = getLocation();

  const fetchWeather = async (city?: string) => {
    try {
      setLoading(true);
      let query = city?.trim();
      if (!query && location) {
        query = `${location.lat},${location.lon}`;
      }
      if (!query) {
        console.log('Город не указан и геолокация недоступна');
        setLoading(false);
        return;
      }

      const data = await getWeather(query);
      console.log('Ответ API:', data);
      if (!data || !data.current || !data.forecast) {
        console.warn('Нет данных от API');
        setWeather(null);
        setDetails(null);
        setForecast([]);
        setLoading(false);
        return;
      }

      const newWeather = {
        temperature: data.current.temp_c,
        city: data.location.name,
        time: data.location.localtime.split(' ')[1],
        icon: data.current.condition.icon,
      };
      setWeather(newWeather);

      setDetails({
        temperature: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        pressure: data.current.pressure_mb,
        precipitation: data.current.precip_mm,
        windSpeed: data.current.wind_kph,
        windDirection: data.current.wind_dir,
        visabilty: data.current.vis_km,
        humadity: data.current.humidity,
        uv: data.current.uv,
        report: data.current.last_updated.split(' ')[1],
      });
      const newForecast = data.forecast.forecastday.map(
        (day: IWeatherForecastDay) => ({
          date: day.date,
          day: day.day,
        }),
      );
      setForecast(newForecast);
      console.log('Прогноз на неделю обновлен', newForecast);
    } catch (error) {
      console.error('Ошибка API: ', error);
      setWeather(null);
      setDetails(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (location) {
      fetchWeather();
    } else {
      fetchWeather('Moscow');
    }
  }, [location]);
  return { weather, details, forecast, fetchWeather, loading };
};
export default useWeather;
