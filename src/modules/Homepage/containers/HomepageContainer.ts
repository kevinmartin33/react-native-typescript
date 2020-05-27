import {
  bindActionCreators,
  Dispatch
} from 'redux'
import { connect } from 'react-redux'

import {
  HomepageView,
  HomepageProps
} from '../HomepageView'
import { RootState } from '../../../store/rootreducer'


const mapStateToProps = (state: RootState, props: HomepageProps) => {
  return {
    isConnected: state.auth.isConnected
  }
}

const mapdispatchToProps = (dispatch: Dispatch, props: HomepageProps) => {
  return {
    ...bindActionCreators({
    }, dispatch)
  }
}

const HomepageContainer = connect(
  mapStateToProps,
  mapdispatchToProps
)(HomepageView)

export default HomepageContainer