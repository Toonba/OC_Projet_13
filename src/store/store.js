import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  isProfileDisplayed: false
}

const checkAuth = { type: 'checkAuth' }
const checkDisplay = { type: 'checkDisplay' }

function authReducer(state = initialState.auth, action) {
  if (action.type === 'checkAuth') {
    return !state;
  }
  return state;
}

function profileReducer(state = initialState.isProfileDisplayed, action) {
  if (action.type === 'checkDisplay') {
    return !state;
  }
  return state;
}

const reducers = {
  auth: authReducer,
  isProfileDisplayed: profileReducer
}

const store = configureStore({ reducer: reducers })

export default store
