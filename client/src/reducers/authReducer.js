import {
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/userActions";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: null,
  msg: null,
  showMsg: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        msg: null,
        showMsg: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        msg: null,
        showMsg: false,
      };
    case LOGOUT_SUCCESS:
    case LOAD_USER_FAIL:
      localStorage.removeItem("token");
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        msg: null,
        showMsg: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        msg: action.payload.data,
        showMsg: true,
      };
    default:
      return state;
  }
};
