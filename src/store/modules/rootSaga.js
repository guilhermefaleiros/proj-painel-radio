import { all } from 'redux-saga/effects';

import order from './order/sagas';
import auth from './auth/sagas';

export default function* rootSaga(){
  return yield all([order, auth]);
}