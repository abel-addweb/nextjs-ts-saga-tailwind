import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({reducer: rootReducer, middleware: [sagaMiddleware, logger]})
  sagaMiddleware.run(rootSaga)
  return store   
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(makeStore, { debug: true })