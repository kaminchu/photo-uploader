//@flow
import {combineReducers} from 'redux';

// reducer
import timelineReducer from './timeline';

// type
import type {State as TimelineState} from './timeline';


export type State = {
  timeline: TimelineState;
};
export default combineReducers({timelineReducer});