import { asyncRequest } from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loadingStatus, setWeather } from '../reducers/currentWeatherSlice';
import { AxiosResponse } from 'axios';
import { IWeatherResponse } from '../type/ICurrentWeather';
import { ApiService } from '../api/apiService';

function* sagaWorker(action: ReturnType<typeof asyncRequest>) {
  console.log('saga:', action);
  yield put(loadingStatus(true))
  try {
    const response: AxiosResponse<IWeatherResponse> = yield call(ApiService.getCurrentWeather, action.payload.defaultCity);
    const data = response.data;

    yield put(setWeather({
      data
    }));
    yield put(loadingStatus(false))
  } catch (err) {
    console.log(err);
  }
}

export function* sagaWatcher() {
  yield takeEvery(asyncRequest.type, sagaWorker);
}