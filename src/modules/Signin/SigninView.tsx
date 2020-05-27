import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {StackNavigatorProp} from '../../router/StackNavigator';
import {RegisterUserAction} from './types/register';
import {
  COLOR_WHITE,
  COLOR_GREY,
  COLOR_YELLOW,
} from '../../../static/misc/colors';
import {REGEX_EMAIL} from '../../../static/misc/constants';

interface SigninProps {
  navigation: StackNavigatorProp;
  registerUser: () => RegisterUserAction;
}

interface SigninState {
  login: string;
  userCanTry: boolean;
}

export class SigninView extends React.Component<SigninProps, SigninState> {
  constructor(props: SigninProps) {
    super(props);
    this.state = {
      login: '',
      userCanTry: false,
    };
  }

  componentDidUpdate() {
    const {login, userCanTry} = this.state;
    if (REGEX_EMAIL.test(login) && !userCanTry) {
      this.userCanTry(true);
    } else if (!REGEX_EMAIL.test(login) && userCanTry) {
      this.userCanTry(false);
    }
  }

  userCanTry = (userCanTry: boolean) => this.setState({userCanTry});

  handleChange = (name: string) => (value: string) =>
    this.setState({[name]: value} as object);

  onLogin = () => {
    const {registerUser} = this.props;
    registerUser();
    this.goTo('Login')();
  };

  goTo = (route: any) => () => {
    const {navigation} = this.props;
    navigation.navigate(route);
  };

  render() {
    const {userCanTry} = this.state;
    return (
      <SafeAreaView style={styles.appContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.avoidingView}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.form}>
            <TextInput
              placeholder="Identifiant"
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
              onChangeText={this.handleChange('login')}
            />
            <TouchableOpacity
              style={[styles.button, !userCanTry ? styles.isDisabled : null]}
              onPress={this.onLogin}
              disabled={!userCanTry}>
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={this.goTo('Login')}>
              <Text>Retour</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_WHITE,
  },
  avoidingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 50,
  },
  form: {
    width: '80%',
  },
  input: {
    fontSize: 14,
    zIndex: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR_GREY,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: COLOR_YELLOW,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: COLOR_WHITE,
  },
  isDisabled: {
    opacity: 0.5,
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
