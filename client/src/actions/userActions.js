import axios from "axios";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const loadUser = () => (dispatch, getState) => {
  axios
    .get("/api/auth", getToken(getState))
    .then((res) => {
      dispatch({ type: LOAD_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response,
      });
    });
};

export const getToken = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  token && (config.headers["x-auth-token"] = token);
  return config;
};
export const register = (user) => (dispatch) => {
  axios
    .post("/api/users/register", user)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      localStorage.removeItem("token");
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data,
      });
    });
};
