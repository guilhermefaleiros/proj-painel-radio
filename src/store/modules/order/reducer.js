import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
}

export default function order(state = INITIAL_STATE, action){
  switch(action.type){
    case 'LIST_ALL_ORDERS_SUCCESS':
      return produce(state, draft =>{
        draft.orders = action.payload;
      })
    case 'REMOVE_ORDER':
      let newState = state.filter(item => item.id !== action.payload.id);
      return newState;
    // case 'SET_ORDER_READ':
    //   let newStateRead = state.map(item => {
    //     if(item.id === action.payload.id){
    //       item.read = true;
    //       return item;
    //     }
    //     return item;
    //   })
    //   return newStateRead;
    default:
      return state;
  }
}