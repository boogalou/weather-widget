import { all } from 'redux-saga/effects';

import { sagaWatcher } from '../sagas/watherSaga';


export function* rootSaga(): Generator {
  yield all([
    sagaWatcher(),
  ]);
}