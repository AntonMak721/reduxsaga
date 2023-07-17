import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import removeUserAction, { fetchUsers } from "./store/userReducer";

import {
  asyncIncrementCreator,
  asyncDecrementCreator,
} from "./store/countReducer";

// import {
//   addCustomerAction,
//   removeCustomerAction,
// } from "./store/customerReducer";
// import { fetchCustomers } from "./asyncActions/manyCustomers";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  console.log(count);

  // const addUser = (name) => {
  //   const user = {
  //     name,
  //     id: Date.now(),
  //   };
  //   dispatch(addUserAction(customer));
  // };

  const removeUser = (user) => {
    dispatch(removeUserAction(user.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{count}</div>
      <div className="buttonsWrapper" style={{ display: "flex" }}>
        <button onClick={() => dispatch(asyncIncrementCreator())}>ИНК</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>ДЕК</button>
        <button onClick={() => dispatch(fetchUsers())}>
          Добавить клиентов из БД
        </button>
      </div>

      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <div
              onClick={() => removeUser(user)}
              style={{
                fontSize: "20px",
                marginTop: "7px",
                border: "1px solid rgb(143, 194, 160)",
                borderRadius: "5px",
                height: "45px",
              }}
            >
              {user.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "3rem", marginTop: "20px" }}>
          Клиенты отсутствуют!
        </div>
      )}
    </div>
  );
};

export default App;
