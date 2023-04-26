import { configureStore } from '@reduxjs/toolkit'
import { produce } from 'immer'

const initialState = {
  auth: false,
  token: '',
  user: []
}

const CHECK_AUTH = 'checkAuth'
const STORE_USER = 'storeUser'
const STORE_TOKEN = 'storeToken'

export const authentification = () => ({ type: CHECK_AUTH })
export const user = (firstName, lastName, edit) => ({ type: STORE_USER, payload: { firstName: firstName, lastName: lastName, edit: edit } })
export const storeToken = (value) => ({ type: STORE_TOKEN, payload: value })

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHECK_AUTH:
        draft.auth = !draft.auth
        return
      case STORE_USER:
        if (action.payload.edit === false) {
          if (draft.user.length === 0) {
            draft.user = [{ firstName: action.payload.firstName, lastName: action.payload.lastName }]
            return
          } else {
            draft.user = []
            return
          }
        } else {
          draft.user = [{ firstName: action.payload.firstName, lastName: action.payload.lastName }]
          return
        }
      case STORE_TOKEN:
        if (draft.token === '') {
          draft.token = action.payload
          return
        } else {
          draft.token = ''
          return
        }
      default:
        return state
    }
  })
}

// function authReducer(state = initialState.auth, action) {
//   return produce (state, (draft) => {
//     if (action.type === CHECK_AUTH) {
//       return !draft
//     }
//     return state
//   })
// }

// function userReducer(state = initialState.user, action) {
//   return produce(state, (draft) => {
//     if (action.type === STORE_USER) {
//       if (draft.length === 0) {
//         draft = [{ firstName: action.payload.firstName, lastName: action.payload.lastName }]
//       } else {
//         draft = []
//       }
//       return draft
//     }
//     return state
//   })
// }

// function tokenReducer(state = initialState.token, action) {
//   return produce(state, (draft) => {
//     if (action.type === STORE_TOKEN) {
//       if (draft === '') {
//         draft = action.payload.value
//       } else {
//         draft = ''
//       }
//       return draft
//     }
//     return state
//   })
// }

// const reducers = {
//   auth: authReducer,
//   user: userReducer,
//   token: tokenReducer
// }

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore({ reducer: reducer }, reduxDevtools)

export default store
