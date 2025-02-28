import st from './Footer.module.css';
import WeatherForTheWeek from './weatherForTheWeek/WeatherForTheWeek';
import { IWeatherForecastDay } from '../../types/types';
import React, { useState } from 'react';
import { format } from 'date-fns';
export interface IWeatherForecastDayProps {
  forecast: IWeatherForecastDay[];
}
const Footer: React.FC<IWeatherForecastDayProps> = ({ forecast }) => {
  const [week, setWeek] = useState(false);
  const today = format(new Date(), 'yyyy-MM-dd');
  const displayedForecast = week
    ? forecast
    : forecast.filter(day => day.date === today);
  if (!forecast || forecast.length === 0) {
    return <p>No forecast found.</p>;
  }
  return (
    <div className={st.footer}>
      <div className={st.switchContainer}>
        <button
          className={`${st.switchBtn} ${!week ? st.active : ''}`}
          onClick={() => setWeek(false)}
        >
          Today
        </button>
        <button
          className={`${st.switchBtn} ${week ? st.active : ''}`}
          onClick={() => setWeek(true)}
        >
          7-day weather forecast
        </button>
      </div>
      {/*<h3 className={st.forecast}>7-day weather forecast</h3>*/}
      <div className={st.weatherCardWrap}>
        {displayedForecast.map((day, index) => (
          <WeatherForTheWeek key={index} forecast={day} isWeek={!!week} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
