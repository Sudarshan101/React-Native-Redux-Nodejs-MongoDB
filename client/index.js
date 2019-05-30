import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './src/Reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
const store = createStore(reducer, applyMiddleware(thunk, logger));

const reactNativeRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => reactNativeRedux);

