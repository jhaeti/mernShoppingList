import axios from "axios";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

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
