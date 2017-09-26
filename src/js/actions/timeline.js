//@flow
import {createActions} from 'redux-actions';

const types = {
  SERVER_DO_FAVORITE: 'SERVER_DO_FAVORITE',
  SERVER_REMOVE_PHOTO: 'SERVER_REMOVE_PHOTO',
  OPEN_PHOTO: 'OPEN_PHOTO',
  OPEN_POST_DIALOG: 'OPEN_POST_DIALOG',
  OPEN_REMOVE_DIALOG: 'OPEN_REMOVE_DIALOG',
  CLOSE_REMOVE_DIALOG: 'CLOSE_REMOVE_DIALOG',
  CHANGE_FILE: 'CHANGE_FILE',
  CHANGE_MESSAGE: 'CHANGE_MESSAGE',
  CLOSE_POST_DIALOG: 'CLOSE_POST_DIALOG',
};

export default createActions(
  {
    [types.SERVER_DO_FAVORITE]: (id: number) => ({id}),
    [types.SERVER_REMOVE_PHOTO]: (id: number) => ({id}),
    [types.OPEN_PHOTO]: (id: number) => ({id}),
    [types.OPEN_REMOVE_DIALOG]: (id: number) => ({id}),
    [types.CHANGE_FILE]: (file: File) => ({file}),
    [types.CHANGE_MESSAGE]: (message: string) => ({message}),
  },
  types.OPEN_POST_DIALOG,
  types.CLOSE_REMOVE_DIALOG,
  types.CLOSE_POST_DIALOG
);
