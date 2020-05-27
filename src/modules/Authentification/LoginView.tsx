import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native';

import { StackNavigatorProp } from '../../router/StackNavigator';
import { ConnectUserAction } from './types/auth';

import {
  COLOR_WHITE
} from '../../../static/misc/colors';


export interface LoginProps {
  navigation: StackNavigatorProp,
  connectUser: () => ConnectUserAction
}

export class LoginView extends React.Component<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    const {
      navigation,
      connectUser
    } = this.props

    return (
      <SafeAreaView style={styles.appContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('MainFlow');
          connectUser();
        }}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_WHITE
  }
})