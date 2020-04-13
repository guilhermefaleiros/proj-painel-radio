import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

import { toast } from 'react-toastify';

import {signInSuccess, signFailure } from './actions';

export function* signIn({ payload }){
  try {
    const { email, password } = payload;
    console.log(payload);
  
    const response = yield call(api.post, 'sessions', {
      email, password
    })
  
    const {token, user} = response.data;
  
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    
    history.push('/dashboard')
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados!')
    yield put(signFailure())
  }
 
}

export function setToken({ payload }){
  console.log('EAE')
  if(!payload) return;

  const { token } = payload.auth;

  if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('SIGN_IN_REQUEST', signIn)
]);