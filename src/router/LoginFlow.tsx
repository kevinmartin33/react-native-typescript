import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginViewContainer from '../modules/Authentification/containers/LoginViewContainer'

export type LoginFlowParamList = {
  Login: undefined
}

const LoginStack = createStackNavigator<LoginFlowParamList>();

export default function LoginFlow() {
  return (
    <LoginStack.Navigator initialRouteName="Login"
                          headerMode="none">
      <LoginStack.Screen name="Login" component={LoginViewContainer} />
    </LoginStack.Navigator>
  )
}