import { combineReducers, legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import { loginReducer } from "./loginReducer"

const rootReducer = combineReducers({
  cash: cashReducer,
  customerReducer: customerReducer,
  loginReducer: loginReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
