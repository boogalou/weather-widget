import React, { ChangeEvent, FC, useState } from 'react';

import styles from './Modal.module.css';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setCity, setSettingsVisible } from '../../reducers/currentWeatherSlice';
import { asyncRequest } from '../../actions';

export const Modal: FC = () => {

  const visible = useAppSelector((state) => state.currentWeather.visibleSettings)

  const dispatch = useAppDispatch();

  const [textValue, setTextVale] = useState<string>('');

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setTextVale(evt.target.value)
  }

  const citySettingsHandler = () => {
    dispatch(setCity(textValue))
    setTextVale('')
    dispatch(setSettingsVisible(!visible))
  }

  const visibleClickHandler = () => {
    dispatch(setSettingsVisible(!visible))
  }

  return (
    <>
      <div className={ visible ? styles.modal : styles.modal__active  }>
        <div className={ styles.modal__content }>
          <h2 className={ styles['modal-title'] }>Настройки</h2>
          <div className={ styles.wrapper }>
            <div className={ styles.form }>
              <input
                className={ styles['input-city'] }
                type="text"
                placeholder="укажите ваш город"
                onChange={inputChangeHandler}
              />
            </div>
            <div className={ styles['modal-btn-block'] }>
              <button className={ cn(styles.btn, styles['btn-ok']) } onClick={citySettingsHandler}>ok</button>
              <button className={ cn(styles.btn, styles['btn-cancel']) } onClick={visibleClickHandler}>cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
