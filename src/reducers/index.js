import {combineReducers} from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from './UserReducer';
import TimerReducer from './TimerReducer';
import BusinessReducer from './BusinessReducer';

export default combineReducers({
  orders: OrderReducer,
  user: UserReducer,
  timer: TimerReducer,
  business: BusinessReducer
});
