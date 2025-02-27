import style from './MainContent.module.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import useWeather from '../hooks/useWeather';

const MainContent = () => {
  const { weather, details, forecast, fetchWeather } = useWeather();
  return (
    <div className={style.mainContent}>
      <div className={style.mainContainer}>
        <Header fetchWeather={fetchWeather} />
        <Main weather={weather} details={details} />
        <Footer forecast={forecast ?? []} />
      </div>
    </div>
  );
};

export default MainContent;
