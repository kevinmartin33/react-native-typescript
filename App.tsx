import 'react-native-gesture-handler';

import React from 'react';

import {
  StatusBar
} from 'react-native';

import { Store } from 'redux';
import { Provider } from 'react-redux';

import createStore from './src/store/createStore';
import AppNavigator from './src/router/AppNavigator';

interface State {
  asyncStore: Store | null;
}

class Boilerplate extends React.Component<{}, State> {
  state: State = {
    asyncStore: null
  }

  async getAsyncReduxStore(): Promise<void> {
    this.setState({asyncStore: await createStore()})
  }

  componentDidMount() {
    StatusBar.setHidden(true);
    this.getAsyncReduxStore()
  }

  render() {
    const {
      asyncStore
    } = this.state

    if (asyncStore)
      return (
        <Provider store={asyncStore}>
          <AppNavigator/>
        </Provider>
      )
    else
      //SplashScreen
      return null
  }
}

export default Boilerplate;