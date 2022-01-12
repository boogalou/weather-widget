import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { logger, sagaMiddleware } from './middleware';



export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...getDefaultMiddleware({thunk: false}), logger, sagaMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga)
