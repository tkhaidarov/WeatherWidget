import st from './WeatherForTheWeek.module.css';
import { IWeatherForecastDay } from '../../../types/types';
import React from 'react';
import { format, parseISO } from 'date-fns';
// import { en } from 'date-fns/locale';
interface IWeatherForTheWeekProps {
  forecast: IWeatherForecastDay;
  isWeek: boolean;
}
const WeatherForTheWeek: React.FC<IWeatherForTheWeekProps> = ({
  forecast,
  isWeek,
}) => {
  const isToday = forecast.date === format(new Date(), 'yyyy-MM-dd');
  return (
    <div
      className={`${st.weatherCard} ${isToday ? (isWeek ? st.todayWeekly : st.today) : ''}`}
    >
      <h3 className={st.title}>
        {isToday ? 'Today' : format(parseISO(forecast.date), 'EEEE')}
      </h3>
      <p className={st.currentDate}>
        {format(parseISO(forecast.date), 'd MMM')}
      </p>
      <div className={st.weatherIcon}>
        <img
          src={forecast.day.condition.icon.replace('64x64', '128x128')}
          alt="Icon"
        />
      </div>
      <p className={st.currentTemp}>{forecast.day.avgtemp_c} °C</p>
      <p className={st.nightTemp}>{forecast.day.mintemp_c} °C</p>
      <p className={st.weatherType}>{forecast.day.condition.text}</p>
    </div>
  );
};

export default WeatherForTheWeek;
