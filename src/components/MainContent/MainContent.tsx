import { FC } from 'react';
import cn from 'classnames';

import styles from './MainContent.module.css';
import rain from '../../assets/img/hail_heavyrain_granizo_1468.png';
import { useAppSelector } from '../../hooks/reduxHooks';


export const MainContent: FC = () => {

  const [main] = useAppSelector((state) => state.currentWeather.weatherData.map(item => item));
  const  isLoading  = useAppSelector((state) => state.currentWeather.isLoading);
  const weatherData = useAppSelector((state) => state.currentWeather.weatherData);

  console.log(isLoading);

  return (
    <div className={ cn(styles.display) }>
      <div className={ cn(styles.display__top, styles.top) }>
        <div className={ cn(styles.top__location) }>
          { isLoading ? 'loading...' : <div className={ styles.location }>{ weatherData.map(item => item.name) }</div> }
          <div className={ styles.date }>january 10, 2022</div>
        </div>
        <div className={ styles.top__icon }>
          <img className={ styles.icon } src={ rain } alt="weather-icon"/>
          <p className={ styles.status }>{ weatherData.map(item => item.weather.map(item => item.main)) }</p>
        </div>
      </div>
      <div className={ styles.top__temperature }>
        <div className={ cn(styles.temperature) }>{ weatherData.map(item => item.main.temp)  }&#176;</div>
        <div className={ styles.feels }>{ weatherData.map(item => item.main.temp_max) }&#176;/{weatherData.map(item => item.main.temp_min)}&#176;</div>
      </div>
    </div>
  );
};