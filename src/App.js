import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Orders from './components/Orders/Orders';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateTimer = () => {
      dispatch({type: "INCREASE_TIMER", payload: Math.round((new Date()).getTime() / 1000)});
    }

    let intervalID = setInterval(updateTimer, 1000);

    // Cleanup by clearing interval
    return () => {clearInterval(intervalID)};
  });

  return (
    <BrowserRouter>
      <Route path='/' component={() => <div><Navigation /><Orders /></div>} exact />
      <Route path='/analytics' component={() => <div><Navigation /><Analytics /></div>} />
      <Route path='/settings' component={() => <div><Navigation /><Settings /></div>} />
      <Route path='/auth/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
