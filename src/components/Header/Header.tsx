import React from 'react';
import cn from 'classnames';

import styles from './Header.module.css';
import gear from '../../assets/gear.svg';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Header = () => {

  const value = useAppSelector((state) => state.currentWeather.weatherData)

  return (
    <>
      <div className={ styles.header }>
        <div className={ cn(styles.header__title, styles.title) }>
          <div className={ styles['title-left'] }>
            <div className={ styles['title-location'] }>
              <div className={ styles['title-location__district'] }>
                <span className={ styles.district }>{value.map(i => i.location.region)},&nbsp;</span>
              </div>
              <div className={ styles['title-location__city'] }>
                <span className={ styles.city }>{ value.map(i => i.location.name) }</span>
              </div>
            </div>
            <div className={ cn(styles.header__subtitle, styles.subtitle) }>
              <div className={ styles.subtitle__time }>
                <div className={ styles.time }>
                  <span className={ styles.time__now }>сейчас&nbsp;</span>
                  <span className={ styles.time__clock }>{value.map(i => i.location.localtime)}&nbsp;</span>
                </div>
              </div>
              <div className={ styles.subtitle__history }>
                <div className={ styles.history }>
                  <span className={ styles.history__text }>вчера в это время&nbsp;</span>
                  <span className={ styles.history__temp }>-11&deg;</span>
                </div>
              </div>
            </div>
          </div>
          <div className={ styles['title-setup'] }>
            <div className={ styles['title-setup__icon-gear'] }>
              <img className={ styles['icon-gear__img'] } src={ gear } alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
