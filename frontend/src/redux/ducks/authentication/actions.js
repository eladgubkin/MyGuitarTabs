import * as types from './types';
import { GET_ERRORS } from '../errors/types';
import axios from 'axios';
import { tokenConfig } from '../commonUtils';

// LOAD USER
const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: types.USER_LOADING
  });

  axios
    .get('/api/users/current', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: types.USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: types.AUTH_ERROR
      });
    });
};

// LOGIN USER
const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({
    email,
    password
  });

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: types.LOGIN_FAIL
      });
    });
};

// REGISTER USER
const register = ({ email, name, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({
    email,
    name,
    password
  });

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: types.REGISTER_FAIL
      });
    });
};

// LOGOUT USER
const logout = () => dispatch => {
  dispatch({
    type: types.LOGOUT_SUCCESS
  });
};

export { loadUser, login, register, logout };
