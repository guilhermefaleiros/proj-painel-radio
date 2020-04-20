import { combineReducers } from 'redux';

import order from './order/reducer';
import promotions from './promotions/reducer';
import auth from './auth/reducer';

export default combineReducers({
  order, auth, promotions
})