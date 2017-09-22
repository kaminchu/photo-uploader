//@flow
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Timeline from '../components/timeline';
import timelineActions from '../actions/timeline';

import type {State} from '../reducers';
function mapStateToProps(state: State) {

  return {
    message : state.timeline.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(timelineActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
