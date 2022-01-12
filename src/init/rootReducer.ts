import { combineReducers } from '@reduxjs/toolkit';
import currentWeatherSlice from '../reducers/currentWeatherSlice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherSlice,
});
