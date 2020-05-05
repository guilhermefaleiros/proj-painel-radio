import { all } from 'redux-saga/effects';

import order from './order/sagas';
import auth from './auth/sagas';
import promotion from './promotions/sagas'

export default function* rootSaga(){
  return yield all([order, auth, promotion]);
}