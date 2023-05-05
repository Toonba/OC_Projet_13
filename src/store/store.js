import { configureStore } from '@reduxjs/toolkit'
import { produce } from 'immer'

const initialState = {
  auth: false,
  token: null,
  user: null
}

const CHECK_AUTH = 'checkAuth'
const STORE_USER = 'storeUser'
const STORE_TOKEN = 'storeToken'

export const authentification = () => ({ type: CHECK_AUTH })
export const user = (userData) => ({ type: STORE_USER, payload: userData })
export const storeToken = (value) => ({ type: STORE_TOKEN, payload: value })

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHECK_AUTH:
        draft.auth = !draft.auth
        return
      case STORE_USER:{
            draft.user = action.payload
            return
          }
      case STORE_TOKEN:{
          draft.token = action.payload
          return
        }
      default:
        return state
    }
  })
}

const store = configureStore({ reducer: reducer })

export default store
