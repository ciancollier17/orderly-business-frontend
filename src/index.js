import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
