import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  profile: null
}

export default function auth(state = INITIAL_STATE, action){
  switch(action.type){
    case 'SIGN_IN_SUCCESS':
      return produce(state, draft =>{
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.profile = action.payload.user;
      })
    case 'SIGN_IN_REQUEST':
      return produce(state, draft =>{
        draft.loading = true;
      })
    case 'SIGN_FAILURE':
      return produce(state, draft =>{
        draft.loading = false;
      })
    default:
      return state;
  }
}