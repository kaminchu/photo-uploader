/* global process */
import {createStore,  applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const {protocol, host} = location;
let socket = io(`${protocol}//${host}`);
let socketIoMiddleware = createSocketIoMiddleware(socket, '');

let dev_tool_func = undefined;
if (process.env.NODE_ENV !== 'production') {
  dev_tool_func = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}

export default function configureStore() {
  const logger = createLogger({});
  const createStoreWithMiddleware = applyMiddleware(
    socketIoMiddleware,
    thunk,
    logger
  )(createStore);
  return createStoreWithMiddleware(reducers, dev_tool_func);
}