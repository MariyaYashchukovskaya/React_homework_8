import { ADD_LOGIN, DELETE_LOGIN } from "./constant"

const defaultState = {
  login: false,
}

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        login: action.payload,
      }
    case DELETE_LOGIN:
      return {
        ...state,
        login: action.payload,
      }

    default:
      return state
  }
}
