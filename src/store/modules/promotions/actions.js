export function listAllPromotions(){
  return {
    type: 'LIST_ALL_PROMOTIONS',
  }
}

export function listAllPromotionsSuccess(payload){
  return{
    type: 'LIST_ALL_PROMOTIONS_SUCCESS',
    payload
  }
}

export function removePromotion(payload){
  return {
    type: 'REMOVE_PROMOTION',
    payload
  }
}

export function saveNewPromotion(payload){
  return{
    type: 'SAVE_NEW_PROMOTION',
    payload
  }
}