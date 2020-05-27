import * as React from 'react';
import {useSelector, TypedUseSelectorHook} from 'react-redux';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';

import LoginFlow, {LoginFlowParamList} from './LoginFlow';
import MainFlow, {MainFlowParamList} from './MainFlow';
import {RootState} from '../store/rootreducer';

type RootParamList = {
  MainFlow: undefined;
  LoginFlow: undefined;
};

export type StackNavigatorProp = CompositeNavigationProp<
  StackNavigationProp<RootParamList>,
  CompositeNavigationProp<
    StackNavigationProp<LoginFlowParamList>,
    StackNavigationProp<MainFlowParamList>
  >
>;

const Stack = createStackNavigator();
const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function StackNavigator<RootParamList>() {
  const isConnected = useTypeSelector(state => state.auth.isConnected);

  return (
    <Stack.Navigator initialRouteName="LoginFlow" headerMode="none">
      {isConnected ? (
        <Stack.Screen name="MainFlow" component={MainFlow} />
      ) : (
        <>
          <Stack.Screen name="LoginFlow" component={LoginFlow} />
          <Stack.Screen name="MainFlow" component={MainFlow} />
        </>
      )}
    </Stack.Navigator>
  );
}
