import React, { FC } from 'react';

import styles from './Footer.module.css'
// import weathericon from '../../assets/img/CLOUDS/001lighticons-14.svg';
import { ConditionWeather } from '../../type/ICurrentWeather';


type FooterItemProps = {
  date: string;
  avgtemp_c: string;
  condition: ConditionWeather
}

export const FooterItem: FC<FooterItemProps> = ({date, avgtemp_c, condition}:FooterItemProps) => {
  return (
    <>
      <span className={ styles.byday__text }>{ date }</span>
      <div className={ styles.bayday__icon }>
        <img className={ styles['bayday__icon-img'] } src={ condition.icon } alt=""/>
      </div>
      <span className={ styles.byday__temp }>{ avgtemp_c }&deg;</span>
    </>
  );
};