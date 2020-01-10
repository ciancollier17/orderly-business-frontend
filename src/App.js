import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Orders from './components/Orders/Orders';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';

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
      <Navigation />
      <Route path='/' component={Orders} exact />
      <Route path='/analytics' component={Analytics} />
      <Route path='/settings' component={Settings} />
    </BrowserRouter>
  );
}

export default App;
