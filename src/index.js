import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import Navigation from './components/Navigation/Navigation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Route path='/' component={Orders} exact />
    <Route path='/analytics' component={Analytics} />
    <Route path='/settings' component={Settings} />
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
