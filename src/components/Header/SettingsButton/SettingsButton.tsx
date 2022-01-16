import React from 'react';
import styles from './SettingsButton.module.css';
import gear from '../../../assets/gear.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setSettingsVisible } from '../../../reducers/currentWeatherSlice';

export const SettingsButton = () => {


  const visible = useAppSelector((state) => state.currentWeather.visibleSettings)
  const dispatch = useAppDispatch()
  const visibilitySwitchHandler = () => {
    dispatch(setSettingsVisible(!visible ))
  }

  return (
    <>
      <div className={ styles['title-setup'] }  onClick={visibilitySwitchHandler}>
        <div className={ styles['title-setup__icon-gear'] }>
          <img className={ styles['icon-gear__img'] } src={ gear } alt=""/>
        </div>
      </div>
      </>
  );
};
