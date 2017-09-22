//@flow
import {combineReducers} from 'redux';

// reducer
import timeline from './timeline';

// type
import type {State as TimelineState} from './timeline';


export type State = {
  timeline: TimelineState;
};
export default combineReducers({timeline});