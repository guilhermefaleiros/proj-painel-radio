import { combineReducers } from 'redux';

import order from './order/reducer';

import auth from './auth/reducer';

export default combineReducers({
  order, auth
})