import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/normalize.min.css';
import './assets/css/main.css';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('root')
);
