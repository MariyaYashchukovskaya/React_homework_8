import "./App.css"
import { useDispatch, useSelector } from "react-redux"

import { addCustomerAC } from "./store/customerReducer"
import {
  ADD_CASH,
  ADD_LOGIN,
  DELETE_CUSTOMER,
  DELETE_LOGIN,
  GET_CASH,
} from "./store/constant"

function App() {
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customerReducer.customers)
  const login = useSelector((state) => state.loginReducer.login)
  console.log(login)
  const dispatch = useDispatch()
  const addCash = (cash) => {
    dispatch({ type: ADD_CASH, payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: GET_CASH, payload: cash })
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAC(customer))
  }

  const removeCustomer = (id) => {
    dispatch({ type: DELETE_CUSTOMER, payload: id })
  }

  const addLogin = (value) => {
    dispatch({ type: ADD_LOGIN, payload: value })
  }
  const deleteLogin = (value) => {
    dispatch({ type: DELETE_LOGIN, payload: value })
  }
  return (
    <div className="App">
      <div className={login ? "white" : "black"}>
        <div>
          Выберите тему:
          <label style={{ marginLeft: "5px" }} htmlFor="white">
            cветлая
          </label>
          <input
            style={{ marginLeft: "5px" }}
            id="white"
            type="radio"
            name="radio"
            value="white"
            onChange={() => addLogin(true)}
          />
          <label style={{ marginLeft: "5px" }} htmlFor="black">
            темная
          </label>
          <input
            style={{ marginLeft: "5px" }}
            id="black"
            type="radio"
            name="radio"
            value="rgba(81, 71, 71, 0.458)"
            onChange={() => deleteLogin(false)}
          />
        </div>
        <div className="bank">
          <h3>BANK 🏦</h3>
          <button onClick={() => addCash(Number(prompt()))}>
            ADD CASH +💲
          </button>
          <button onClick={() => getCash(Number(prompt()))}>
            GET CASH -💲
          </button>
          <div className="money">Деньги на счете: {cash}$ 💸</div>
        </div>
        <button
          className="customer"
          onClick={() => addCustomer(String(prompt()))}
        >
          GET CUSTOMER 👯‍♀️
        </button>
        <p>Чтобы удалить клиента 👨 из списка нажмите на него :</p>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                className="customer_list"
                key={customer.id}
                onClick={() => removeCustomer(customer.id)}
              >
                {" "}
                {customer.name}{" "}
              </div>
            ))}
          </div>
        ) : (
          <div>No customer</div>
        )}
      </div>
    </div>
  )
}

export default App
