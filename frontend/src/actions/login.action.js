import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../Constants";

export const setStateToFetching = (payload) => ({
  type: LOGIN_FETCHING,
});
export const setStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const setStateToFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const setStateToLogout = () => ({
  type: LOGOUT,
});

export const login = ({ username, password, history }) => {
  return (dispatch) => {
    dispatch(setStateToFetching());
    setTimeout(() => {
      dispatch(setStateToSuccess("ok"));
      history.push("/stock");
    }, 2000);
  };
};

export const logout = ({ history }) => {
  return (dispatch) => {
    dispatch(setStateToLogout());
    history.push("/");
  };
};

export const setSuccess = (payload) =>{
  return dispatch => {
    dispatch(setStateToSuccess("ok"))
  }
}

export const hasError = (payload) =>{
  return dispatch => {
    dispatch(setStateToFailed(payload))
  }
}