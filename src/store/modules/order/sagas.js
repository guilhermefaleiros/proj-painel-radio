import { all, takeLatest, put, call } from 'redux-saga/effects';
import { listAllOrdersSuccess, listAllOrders } from './actions';
import api from '../../../services/api';
import { toast } from 'react-toastify';

export function* listAll(){
  const response = yield call(api.get, 'orders');
  yield put(listAllOrdersSuccess(response.data));
}

export function* setOrderRead({payload}){
  const { id } = payload;
  yield call(api.put, 'orders', {
    id,
    read: true
  });
  yield put(listAllOrders());
}

export function* removeOrder({payload}){
  try{
    const { id } = payload;
    yield call(api.delete, `/orders/${id}`);
    
    yield put(listAllOrders());
    
  } catch(e){
      toast.error("Não foi possível excluir este pedido")
  }
}

export default all([
  takeLatest('LIST_ALL_ORDERS', listAll),
  takeLatest('SET_ORDER_READ', setOrderRead),
  takeLatest('REMOVE_ORDER', removeOrder)
]);