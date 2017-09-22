//@flow
import {handleActions} from 'redux-actions';
import actions from '../actions/timeline';

export type State = {
  message: string;
}

const defaultState = {
  message: ""
};

export default handleActions({
  [actions.changeMessage]: (state: State, action: any) => ({...state, message: action.payload.message}),
}, defaultState);