import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadingStatus, setWeather } from '../reducers/currentWeatherSlice';
import { ApiService } from '../api/apiService';
import { IWeatherResponse } from '../type/ICurrentWeather';
import { AxiosResponse } from 'axios';
import { asyncRequest } from '../actions';


function* sagaWorker(action: ReturnType<typeof asyncRequest>) {
    yield put(loadingStatus(true))
  try {
    const response: AxiosResponse<IWeatherResponse> = yield call(ApiService.getCurrentWeather, action.payload.city);
    const data = response.data;

    yield put(setWeather({
      data
    }));
    yield put(loadingStatus(false))
  } catch (err) {
    console.log(err);
  }
}

function* sagaWatcher() {
  yield takeEvery(asyncRequest.type, sagaWorker);
}


export function* rootSaga(): Generator {
  yield all([sagaWatcher()]);
}