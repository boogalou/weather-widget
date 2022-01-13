import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Footer.module.css';
import weathericon from '../../assets/img/CLOUDS/001lighticons-14.svg';

export const Footer: FC = () => {
  return (
    <>
      <div className={ styles.footer }>
        <div className={ cn(styles.footer__byday, styles.byday) }>
          <span className={ styles.byday__text }>now</span>
          <div className={ styles.bayday__icon }>
            <img className={ styles['bayday__icon-img'] } src={ weathericon } alt=""/>
          </div>
          <span className={ styles.byday__temp }>-15&deg;</span>
        </div>
      </div>
    </>
  );
};
