//@flow
import {createActions} from 'redux-actions';

const types = {
  POST_PHOTO: 'POST_PHOTO'
};

export default createActions(
  {
    [types.POST_PHOTO]: (message: string) => ({message})
  }
);

