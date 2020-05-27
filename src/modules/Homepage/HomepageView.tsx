import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native';
import { COLOR_BLUE_LIGHT } from '../../../static/misc/colors';
import { StackNavigatorProp } from '../../router/StackNavigator';

export interface HomepageProps {
  navigation: StackNavigatorProp,
  isConnected: boolean
}

export class HomepageView extends React.Component<HomepageProps> {
  constructor(props: HomepageProps) {
    super(props);

  }

  render() {
    const {
      isConnected
    } = this.props

    return (
      <SafeAreaView style={styles.appContainer}>
        <Text>
          {`You are logged, and you are on the logged authenticated flow : boolean isConnected = ${isConnected}`}
        </Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_BLUE_LIGHT
  }
})
