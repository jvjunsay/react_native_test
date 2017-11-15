import * as type from '../actions/types'

const INITIAL_STATE = {email: '', password: '', loading: false, error: '', user: null}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.EMAIL_CHANGED:
      return {...state, email: action.payload}
    case type.PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case type.LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: '', loading: false}
    case type.LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed!', password: '', loading: false}
    case type.LOGIN_USER_START:
      return {...state, loading: true, error: ''}
    default:
      return state
  }
}
