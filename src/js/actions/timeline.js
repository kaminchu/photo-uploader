//@flow
import {createActions} from 'redux-actions';

const types = {
  POST_PHOTO: 'POST_PHOTO',
  CHANGE_MESSAGE: 'CHANGE_MESSAGE'
};

export default createActions(
  {
    [types.CHANGE_MESSAGE]: (message: string) => ({message}),
    [types.POST_PHOTO]: (message: string) => ({message})
  }
);

