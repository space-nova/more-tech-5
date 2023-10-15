import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import CookieManager from '@react-native-cookies/cookies';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/createRootReducer';
import sagas from './sagas';

import { COOKIE_DOMAIN, BASE_URL } from '../common/config';

// AsyncStorage.clear()

AsyncStorage.getItem('cookie').then(cookie => {
  if (cookie) CookieManager.set(BASE_URL, {
    value: cookie.substring(cookie.indexOf('=') + 1, cookie.indexOf(';')),
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 3)),
    domain: COOKIE_DOMAIN,
    name: 'session',
    version: '1',
    path: '/',
  });
});

const persistConfig = {
  key: 'more-tech-5',
  storage: AsyncStorage,
};

const loggerActionColors = {
  success: 'green',
  failed: 'red',
  started: 'blue',
};

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer());

  const store = configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: [
      sagaMiddleware,
      createLogger({
        collapsed: true,
        duration: true,
        colors: {
          title: action => loggerActionColors[action.type.split('.')[1]],
        },
      }),
    ],
    devTools: true,
  });

  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return { store, persistor };
};
