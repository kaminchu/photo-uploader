//@flow
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Router from './router';

const store = configureStore();

type Props = any;
export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
