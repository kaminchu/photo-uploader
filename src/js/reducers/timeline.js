// @flow
import {handleActions} from 'redux-actions';
import actions from '../actions/timeline';

export type State = {
  message: string;
}

const defaultState = {
  photos: [],
  users: [],
  selectedRemovePhotoId: null,
  isOpenRemoveDialog: false,
  isOpenPostDialog: false,
  imageFile: null,
  message: ""
};

export default handleActions({
  [actions.serverDoFavorite]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.serverRemovePhoto]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.openPhoto]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.openPostDialog]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.openRemoveDialog]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.closeRemoveDialog]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.changeFile]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.closePostDialog]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.changeMessage]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.changeMessage]: (state: State, action: any) => ({...state, message: action.payload.message}),
  [actions.changeMessage]: (state: State, action: any) => ({...state, message: action.payload.message}),
}, defaultState);

serverDoFavorite: (id: number) => void;
serverRemovePhoto: (id: number) => void;
openPhoto: (id: number) => void;
openPostDialog: () => void;
openRemoveDialog: (id: number) => void;
closeRemoveDialog: () => void;
changeFile: (file: File) => void;
changeMessage: (message: string) => void;
closePostDialog: () => void;