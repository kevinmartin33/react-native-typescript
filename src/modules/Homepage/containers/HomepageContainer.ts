import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import {getDatas} from '../actions/datas';

import {HomepageView} from '../HomepageView';
import {RootState} from '../../../store/rootreducer';

const mapStateToProps = (state: RootState) => {
  return {
    datas: state.homepage.datas,
    isLoaded: state.homepage.isLoaded,
    isConnected: state.auth.isConnected,
  };
};

const mapdispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      {
        getDatas,
      },
      dispatch,
    ),
  };
};

const HomepageContainer = connect(
  mapStateToProps,
  mapdispatchToProps,
)(HomepageView);

export default HomepageContainer;
