import { ADD_CUSTOMER, DELETE_CUSTOMER } from "./constant"

const defaultState = {
  customers: [],
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      }
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      }

    default:
      return state
  }
}

export const addCustomerAC = (payload) => ({ type: ADD_CUSTOMER, payload })
