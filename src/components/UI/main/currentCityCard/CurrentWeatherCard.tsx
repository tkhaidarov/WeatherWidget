import React from 'react';
import st from './CurrentWeatherCard.module.css';
import { IWeatherMain } from '../../../types/types';
interface IWeatherProps {
  weather: IWeatherMain | null;
}
const CurrentWeatherCard: React.FC<IWeatherProps> = ({ weather }) => {
  return (
    <div className={st.currentCityCard}>
      {weather ? (
        <>
          <div className={st.currentForecast}>
            <div className={st.currentInfo}>
              <p className={st.weatherTemp}>{weather.temperature}°</p>
              <p className={st.weatherToday}>Today</p>
            </div>
            <div className={st.currentIcon}>
              <img
                src={`https:${weather.icon.replace('64x64', '128x128')}`}
                alt="Icon"
              />
            </div>
          </div>
          <p className={st.currentTime}>Time: {weather.time}</p>
          <p className={st.currentCity}>City: {weather.city}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default CurrentWeatherCard;
