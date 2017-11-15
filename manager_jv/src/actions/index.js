import * as type from './types'
import firebase from 'firebase'

export const emailChanged = (text) => ({
  type: type.EMAIL_CHANGED,
  payload: text
})

export const passwordChanged = (text) => ({
  type: type.PASSWORD_CHANGED,
  payload: text
})

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({type: type.LOGIN_USER_START})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
    })
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({type: type.LOGIN_USER_SUCCESS, payload: user})
}

const loginUserFail = (dispatch) => {
  dispatch({type: type.LOGIN_USER_FAIL})
}
