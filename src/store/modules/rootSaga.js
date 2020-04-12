import { all } from 'redux-saga/effects';

import order from './order/sagas';

export default function* rootSaga(){
  return yield all([order]);
}