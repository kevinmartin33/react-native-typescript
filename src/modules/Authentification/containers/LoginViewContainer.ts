import {
  bindActionCreators,
  Dispatch
} from 'redux'
import { connect } from 'react-redux'

import {
  connectUser
} from '../actions/auth'

import {
  RootState
} from '../../../store/rootreducer'
import { LoginView } from '../LoginView'
import { LoginProps } from '../LoginView'

const mapStateToProps = (state: RootState, props: LoginProps) => {
  return {
  }
}

const mapdispatchToProps = (dispatch: Dispatch, props: LoginProps) => {
  return {
    ...bindActionCreators({
      connectUser
    }, dispatch)
  }
}

const LoginViewContainer = connect(
  mapStateToProps,
  mapdispatchToProps
)(LoginView)

export default LoginViewContainer