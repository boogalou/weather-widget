import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrentWeather } from '../type/ICurrentWeather';


export interface ICurrentWeatherState {
  weatherData: ICurrentWeather[];
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

    loadingStaus(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    setWeather(state, action) {
      state.weatherData.push(action.payload.data);
    }
  }
});

export const {setWeather, loadingStaus} = currentWeatherSlice.actions;


export default currentWeatherSlice.reducer;