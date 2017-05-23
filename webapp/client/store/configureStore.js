import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  if ('NODE_ENV' in process.env && process.env.NODE_ENV == 'production') {
    return {
      ...createStore(rootReducer, compose(applyMiddleware(sagaMiddleware))),
      initialState,
      runSaga: sagaMiddleware.run
    }
  } else {
    return {
      ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
      initialState,
      runSaga: sagaMiddleware.run
    }
  }
}
