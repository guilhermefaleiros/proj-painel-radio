import produce from 'immer';

const INITIAL_STATE = {
  items: [],
}

export default function order(state = INITIAL_STATE, action){
  switch(action.type){
    case 'LIST_ALL_ORDERS_SUCCESS':
      return produce(state, draft =>{
        draft.items = action.payload;
      })
    default:
      return state;
  }
}