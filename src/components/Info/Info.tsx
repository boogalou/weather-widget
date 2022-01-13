import React, { FC } from 'react';

import styles from './Info.module.css';
import wind from '../../assets/weather_wind_icon_.svg'
import humidity from '../../assets/humidity_weather_.svg'
import pressure from '../../assets/pressure.svg'
import { useAppSelector } from '../../hooks/reduxHooks';

export const Info: FC = () => {

  const value = useAppSelector((state) => state.currentWeather.weatherData)

  return (
    <>
      <div className={ styles.info }>
        <div className={ styles.info__window }>
          <div className={ styles['window-icon'] }>
            <img className={ styles['window-icon__img'] } src={ wind } alt="icon__img"/>
          </div>
          <span className={ styles.window__text }>{ value.map(i => i.current.wind_kph) } км/ч, &nbsp;</span>
          <div className={ styles.window__direction }>
            <span className={ styles.direction__text }>{ value.map(i => i.current.wind_dir) }</span>
            <div className={ styles.direction__icon }>
              {/*<img className={ styles['icon-se'] } src={''} alt="icon-se"/>*/}
            </div>
          </div>
        </div>
        <div className={ styles.info__humidity }>
          <div className={ styles['humidity-icon'] }>
            <img className={ styles['humidity-icon__img'] } src={humidity} alt="humidity-icon__img"/>
          </div>
          <span className={ styles.humidity__text }>{value.map(i => i.current.humidity)}%</span>
        </div>

        <div className={ styles.info__pressure }>
          <div className={ styles['pressure-icon'] }>
            <img className={ styles['pressure-icon__img'] } src={pressure} alt="pressure-icon__img"/>
          </div>
          <span className={ styles.pressure__text }>{ value.map(i => i.current.pressure_mb) } мм рт. ст.</span>
        </div>

      </div>

      <div className={ styles.border }/>
    </>
  );
};
