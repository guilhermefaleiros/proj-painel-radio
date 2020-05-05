import { all, takeLatest, put, call, take } from 'redux-saga/effects';
import { listAllPromotionsSuccess } from './actions';
import api from '../../../services/api';
import { toast } from 'react-toastify';

export function* listAll(){
  try{
    const response = yield call(api.get, 'promotions');
    yield put(listAllPromotionsSuccess(response.data));
  }catch(e){
    toast.error("Failed");
  }
  
}

export function* removePromotion({payload}){
  try{
    
    
  } catch(e){

  }
}

export default all([
  takeLatest('LIST_ALL_PROMOTIONS', listAll)
]);