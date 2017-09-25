//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Root />, document.getElementById('root'));
