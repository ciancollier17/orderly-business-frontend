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
  let currentUser;

  useEffect(() => {
    const updateTimer = () => {
      dispatch({type: "INCREASE_TIMER", payload: Math.round((new Date()).getTime() / 1000)});
    }

    let intervalID = setInterval(updateTimer, 1000);

    let unsubscribeOrders;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        let getUserData = new Promise((resolve, reject) => {
          firebase.firestore().collection('userData').doc(user.uid).get()
            .then(querySnapshot => {
              resolve(querySnapshot.data());
            })
            .catch(err => {
              reject(err);
            });
        });

        getUserData
          .then(data => {
            // Create user object and place in redux store
            dispatch({type: "AUTH_STATE_CHANGE", payload: {id: user.uid, ...data}});

            // Fetch relevant orders
            unsubscribeOrders = firebase.firestore().collection('orders').where('business', '==', data.business).onSnapshot(async (res) => {
              let newOrders = [];

              res.forEach(doc => {
                let data = doc.data();

                newOrders.push({
                  id: doc.id,
                  ...data
                });
              });

              for (let i = 0; i < newOrders.length; i++) {
                if (newOrders[i].takenBy) {
                  let takenByData = await firebase.firestore().collection('userData').doc(newOrders[i].takenBy).get();
                  newOrders[i].takenByName = takenByData.data().firstName;
                }
              }

              dispatch({type: "UPDATE_ORDERS", payload: newOrders});
            });
          })
          .catch(err => console.log(err));
      } else {
        // No user is signed in.
        dispatch({type: "AUTH_STATE_CHANGE", payload: false});
      }
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
