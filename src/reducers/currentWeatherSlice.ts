import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeatherResponse } from '../type/ICurrentWeather';


export interface ICurrentWeatherState {
  weatherData: IWeatherResponse[];
  isLoading: boolean;
  city: string;
}

const initialState: ICurrentWeatherState = {
  weatherData: [],
  isLoading: false,
  city: 'Ивня',
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,

  reducers: {

    loadingStatus(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    setWeather(state, action) {
      state.weatherData.push(action.payload.data);

    },
  }
});

export const {setWeather, loadingStatus} = currentWeatherSlice.actions;


export default currentWeatherSlice.reducer;