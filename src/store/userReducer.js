const defaultState = {
  users: [],
};

export const ADD_USERS = "ADD_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const REMOVE_USER = "REMOVE_USER";

export default function userReducer (state = defaultState, action) {
  switch (action.type) {
        case ADD_USERS:
      return { ...state, users:  action.payload };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const addUsers = (payload) => ({ type: ADD_USERS, payload });
export const removeUser = (payload) => ({
  type: REMOVE_USER,
  payload
});
export const fetchUsers = ()=> ({type:FETCH_USERS})
