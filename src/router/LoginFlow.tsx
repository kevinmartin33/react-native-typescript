import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginViewContainer from '../modules/Authentification/containers/LoginViewContainer';
import SigninView from '../modules/Signin/containers/SigninViewContainer';

export type LoginFlowParamList = {
  Login: undefined;
  Signin: undefined;
};

const LoginStack = createStackNavigator<LoginFlowParamList>();

export default function LoginFlow() {
  return (
    <LoginStack.Navigator initialRouteName="Login" headerMode="none">
      <LoginStack.Screen name="Login" component={LoginViewContainer} />
      <LoginStack.Screen name="Signin" component={SigninView} />
    </LoginStack.Navigator>
  );
}
