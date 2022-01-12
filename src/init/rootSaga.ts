import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadingStaus, setWeather } from '../reducers/currentWeatherSlice';
import { ApiService } from '../api/apiService';
import { ICurrentWeather } from '../type/ICurrentWeather';
import { AxiosResponse } from 'axios';
import { asyncRequest } from '../actions';


function* sagaWorker(action: ReturnType<typeof asyncRequest>) {
    yield put(loadingStaus(true))
  try {
    const response: AxiosResponse<Array<ICurrentWeather>> = yield call(ApiService.getCurrentWeather, action.payload.city);
    const data = response.data;

    yield put(setWeather({
      data
    }));
    yield put(loadingStaus(false))
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