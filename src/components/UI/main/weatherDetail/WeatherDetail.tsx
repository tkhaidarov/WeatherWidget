import React from 'react';
import st from './WeatherDetail.module.css';
import ForecastDetail from './forecastDetail/ForecastDetail';
import { IWeatherDetails } from '../../../types/types';
import Temperature from '@/assets/icons/temp.svg?react';
import Pressure from '@/assets/icons/pressure.svg?react';
import Wind from '@/assets/icons/wind.svg?react';
import Precipitation from '@/assets/icons/precipitation.svg?react';
import Humadity from '@/assets/icons/humidity.svg?react';
import UV from '@/assets/icons/uv.svg?react';
import Update from '@/assets/icons/update.svg?react';
import Visability from '@/assets/icons/visability.svg?react';

interface IProps {
  details: IWeatherDetails | null;
}
const WeatherDetail: React.FC<IProps> = ({ details }) => {
  if (!details) return null;
  return (
    <>
      <div className={st.weatherDetail}>
        <ForecastDetail
          icon={<Temperature />}
          label="Temperature"
          value={`${details.temperature} °C, feels like ${details.feelsLike}°C`}
        />
        <ForecastDetail
          icon={<Pressure />}
          label="Pressure"
          value={`${details.pressure} mbar`}
        />
        <ForecastDetail
          icon={<Wind />}
          label="Wind"
          value={`${details.windDirection} ${details.windSpeed} km/h `}
        />
        <ForecastDetail
          icon={<Precipitation />}
          label="Precipitation"
          value={details.precipitation}
        />
      </div>
      <div className={st.weatherDetail}>
        <ForecastDetail icon={<UV />} label="UV" value={details.uv} />
        <ForecastDetail
          icon={<Humadity />}
          label="Humadity"
          value={`${details.humadity} %`}
        />
        <ForecastDetail
          icon={<Visability />}
          label="Visability"
          value={`${details.visabilty} km`}
        />
        <ForecastDetail
          icon={<Update />}
          label="Latest report"
          value={details.report}
        />
      </div>
    </>
  );
};

export default WeatherDetail;
