import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

// TODO あとで消す
class App extends Component {
  render() {
    return (
      <h1>Hello, World</h1>
    );
  }
}

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
