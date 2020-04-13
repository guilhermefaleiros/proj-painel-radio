export function listAllOrders(){
  return {
    type: 'LIST_ALL_ORDERS',
  }
}

export function listAllOrdersSuccess(payload){
  return{
    type: 'LIST_ALL_ORDERS_SUCCESS',
    payload
  }
}

export function removeOrder(payload){
  return {
    type: 'REMOVE_ORDER',
    payload
  }
}

export function setOrderRead(payload){
  return{
    type: 'SET_ORDER_READ',
    payload
  }
}