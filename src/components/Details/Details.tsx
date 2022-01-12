import React, { FC } from 'react';
import styles from './Details.module.css';
import cn from 'classnames';
import gear from '../../assets/img/gear.svg';
import rain from '../../assets/img/hail_heavyrain_granizo_1468.png';

export const Details: FC = () => {
  return (
    <>
      <div className={ styles.details__container }>
        <div className={ styles.tabs }>
          <ul className={ cn(styles.list) }>
            <li className={ cn(styles.item, styles.active) }><a href="">Hourly</a></li>
            <li className={ styles.item }><a href="">Daily</a></li>
            <li className={ styles.item }><a href="">Details</a></li>
            <li className={ styles.item }><a className={ styles.last } href="">Precipitaion</a></li>
            <li className={ styles.gear }>
              <img className={ cn(styles.gear__icon) } src={ gear } alt=""/>
            </li>
          </ul>

        </div>
        <div className={ styles.details }>
          <ul className={ styles['details-list'] }>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
            <li className={ styles['details-item'] }>
              <span>Nov</span>
              <div className={ styles['details__weather-icon'] }>
                <img className={ styles['weather-icon'] } src={ rain } alt="weather-icon"/>
              </div>
              <span className={ styles['weather-status'] }>rain</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
