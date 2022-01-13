import React, { FC } from 'react';

import styles from './Main.module.css';
import weathericon from '../../assets/img/CLOUDS - 2ß version/001lighticons-09.svg';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Main: FC = () => {

  const value = useAppSelector((state) => state.currentWeather.weatherData)

  return (
    <>
      <div className={ styles.main }>
        <div className={ styles['main-temp'] }>
          <span className={ styles['main-temp__temp'] }>{ value.map(i => i.current.temp_c) }&deg;</span>
        </div>
        <div className={ styles['main-weather-icon'] }>
          <img className={ styles['main-weather-icon__img'] } src={ weathericon } alt=""/>
        </div>
        <div className={ styles['main-summary'] }>
          <span className={ styles['main-summary__text'] }>{  value.map(i => i.current.condition.text) }</span>
          <div className={ styles['main-summary__feelslike'] }>
            <span className={ styles.feelslike__text }>ощущается как</span>
            <span className={ styles.feelslike__temp }>{ value.map(i => i.current.feelslike_c) }&deg;</span>
          </div>
        </div>
      </div>
    </>
  );
};
