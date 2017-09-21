import {createStore,  applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:8080');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");


export default function configureStore() {
  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(
    socketIoMiddleware,
    thunk,
    logger
  )(createStore);
  return createStoreWithMiddleware(reducers);
}