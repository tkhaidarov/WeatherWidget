import st from './Footer.module.css';
import WeatherForTheWeek from './weatherForTheWeek/WeatherForTheWeek';
import { IWeatherForecastDay } from '../../types/types';
import React from 'react';
export interface IWeatherForecastDayProps {
  forecast: IWeatherForecastDay[];
}
const Footer: React.FC<IWeatherForecastDayProps> = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return <p>No forecast found.</p>;
  }
  return (
    <div className={st.footer}>
      <h3 className={st.forecast}>7-day weather forecast</h3>
      <div className={st.weatherCardWrap}>
        {forecast.map((day, index) => (
          <WeatherForTheWeek key={index} forecast={day} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
