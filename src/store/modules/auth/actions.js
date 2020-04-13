export function signInRequest(email, password){
  return {
    type: 'SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess(token, user){
  return{
    type: 'SIGN_IN_SUCCESS',
    payload: { user, token },
  };
}

export function signFailure(){
  return{
    type: 'SIGN_FAILURE'
  }
}