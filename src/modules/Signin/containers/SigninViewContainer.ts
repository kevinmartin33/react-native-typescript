import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import {registerUser} from '../actions/register';

import {RootState} from '../../../store/rootreducer';
import {SigninView} from '../SigninView';

const mapStateToProps = (_state: RootState) => {
  return {};
};

const mapdispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      {
        registerUser,
      },
      dispatch,
    ),
  };
};

const SigninViewContainer = connect(
  mapStateToProps,
  mapdispatchToProps,
)(SigninView);

export default SigninViewContainer;
