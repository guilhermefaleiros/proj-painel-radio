import { all, takeLatest, put, call } from 'redux-saga/effects';
import { listAllOrdersSuccess, listAllOrders } from './actions';
import { signOut } from '../auth/actions'
import api from '../../../services/api';
import { toast } from 'react-toastify';

export function* listAll(){
  try{
    const response = yield call(api.get, 'orders');

    if(response.data.status){
      yield put(signOut())
      return toast.info("Sua sessão foi expirada, logue novamente para continuar navegando!")
    }

    yield put(listAllOrdersSuccess(response.data));
  } catch(e){
    toast.error('Falha na comunicação com o servidor!')
  }
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
    const response = yield call(api.delete, `/orders/${id}`);

    if(response.data){
      yield put(signOut())
      return toast.info("Sua sessão foi expirada, logue novamente para continuar navegando!")
    }
    
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