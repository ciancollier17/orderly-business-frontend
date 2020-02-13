import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Navigation from './components/Navigation/Navigation';
import Orders from './components/Orders/Orders';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import LostPassword from './components/LostPassword/LostPassword';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateTimer = () => {
      dispatch({type: "INCREASE_TIMER", payload: Math.round((new Date()).getTime() / 1000)});
    }

    let intervalID = setInterval(updateTimer, 1000);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch({type: "AUTH_STATE_CHANGE", payload: user});
      } else {
        // No user is signed in.
        dispatch({type: "AUTH_STATE_CHANGE", payload: false});
      }
    });

    // TODO: Make this use the document in business collection eventually
    let unsubscribeOrders = firebase.firestore().collection('orders').onSnapshot(res => {
      let newOrders = [];

      res.forEach(doc => {
        let data = doc.data();

        newOrders.push({
          id: doc.id,
          ...data
        });
      });

      dispatch({type: "UPDATE_ORDERS", payload: newOrders});
    });

    // Cleanup by clearing interval
    return () => {clearInterval(intervalID); unsubscribeOrders()};
  }, []);

  return (
    <BrowserRouter>
      <Route path='/' component={() => <div><Navigation /><Orders /></div>} exact />
      <Route path='/analytics' component={() => <div><Navigation /><Analytics /></div>} />
      <Route path='/settings' component={() => <div><Navigation /><Settings /></div>} />
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/lostpassword' component={LostPassword} />
    </BrowserRouter>
  );
}

export default App;
