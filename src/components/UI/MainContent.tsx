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
        <div className={style.header}>
          <Header fetchWeather={fetchWeather} />
        </div>
        <div className={style.main}>
          <Main weather={weather} details={details} />
        </div>
        <div className={style.footer}>
          <Footer forecast={forecast ?? []} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
