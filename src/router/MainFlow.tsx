import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomepageView from '../modules/Homepage/containers/HomepageContainer';

export type MainFlowParamList = {
  Homepage: undefined;
};

const MainStack = createStackNavigator<MainFlowParamList>();

export default function MainFlow() {
  return (
    <MainStack.Navigator initialRouteName="Homepage" headerMode="none">
      <MainStack.Screen name="Homepage" component={HomepageView} />
    </MainStack.Navigator>
  );
}
