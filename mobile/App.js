import 'react-native-gesture-handler';
import './utils/ignoreLogs';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import {YaMap} from 'react-native-yamap';
import { Provider } from 'react-redux';
import React from 'react';

import createStore from './store/createStore';
import Layout from './components/Layout';

const { store, persistor } = createStore();

YaMap.init('e01b5169-6f35-42e3-a1e5-46f092fec31f');

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastProvider>
          <SafeAreaProvider>
            <Layout />
          </SafeAreaProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
};
