import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/userActions";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: null,
  msg: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case REGISTER_FAIL:
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        msg: action.payload,
      };
    default:
      return state;
  }
};
