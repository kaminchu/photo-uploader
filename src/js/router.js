//@flow
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Top from './containers/top';

type Props = any;
export default class Router extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Top} />
        </div>
      </BrowserRouter>
    );
  }
}


