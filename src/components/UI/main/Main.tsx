import st from './Main.module.css';
import CurrentWeatherCard from './currentCityCard/CurrentWeatherCard';
import WeatherDetail from './weatherDetail/WeatherDetail';
import React from 'react';
import { IWeatherMain, IWeatherDetails } from '../../types/types';
interface IMainProps {
  weather: IWeatherMain | null;
  details: IWeatherDetails | null;
}
const Main: React.FC<IMainProps> = ({ weather, details }) => {
  return (
    <div className={st.main}>
      {weather ? (
        <CurrentWeatherCard weather={weather} />
      ) : (
        <p>Данные о погоде не загружены</p>
      )}
      {details ? (
        <WeatherDetail details={details} />
      ) : (
        <p>Нет деталей о погоде</p>
      )}
    </div>
  );
};

export default Main;
