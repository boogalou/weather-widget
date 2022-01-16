import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeatherResponse } from '../type/ICurrentWeather';


export interface ICurrentWeatherState {
  weatherData: IWeatherResponse[];
  isLoading: boolean;
  defaultCity: string;
  visibleSettings: boolean;
}

const initialState: ICurrentWeatherState = {
  weatherData: [],
  isLoading: false,
  defaultCity: 'Ивня',
  visibleSettings: false,
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,

  reducers: {

    loadingStatus(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    setWeather(state, action) {
      return {
        ...state,
        weatherData: [action.payload.data]
      };
    },

    setSettingsVisible(state, {payload}: PayloadAction<boolean>) {
      state.visibleSettings = payload;
    },

    setCity(state, {payload}: PayloadAction<string>) {
      state.defaultCity = payload;
    }
  }
});

export const {setWeather, loadingStatus, setSettingsVisible, setCity} = currentWeatherSlice.actions;


export default currentWeatherSlice.reducer;