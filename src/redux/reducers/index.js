import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  TODOINDEX,TODOMODEL,
  BUCKETLIST
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
    return { ...state, error: '', authenticated: true,payload:action.payload}
    case UNAUTH_USER:
    return { ...state, authenticated: false}
    case AUTH_ERROR:
    return { ...state, error: action.payload}
    case TODOINDEX:
    return { ...state, payload: action.payload}
    case TODOMODEL:
    return { ...state, payload: action.payload}
    case BUCKETLIST:
    return { ...state, payload: action.payload}
    default:
      return state
  }
}