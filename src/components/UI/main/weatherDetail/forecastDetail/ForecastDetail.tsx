import st from './ForecastDetail.module.css';
import React, { JSX } from 'react';
interface IForecastDetailsProps {
  icon: JSX.Element;
  label: string;
  value: string | number;
}
const ForecastDetail: React.FC<IForecastDetailsProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className={st.forecastDetail}>
      <div className={st.icon}>{icon}</div>
      <span className={st.weatherValue}>{label}</span>
      <span className={st.valueDescription}>{value}</span>
    </div>
  );
};

export default ForecastDetail;
