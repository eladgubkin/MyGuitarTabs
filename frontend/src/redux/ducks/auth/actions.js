import * as types from './types';
import axios from 'axios';
import { tokenConfig } from '../commonUtils';

// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: types.USER_LOADING
  });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: types.USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: types.AUTH_ERROR
      });
    });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({
    username,
    password
  });

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: types.LOGIN_FAIL
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({
    username,
    password,
    email
  });

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: types.REGISTER_FAIL
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout', null, tokenConfig(getState))
    .then(() => {
      dispatch({
        type: types.LOGOUT_SUCCESS
      });
    })
    .catch(err => console.log(err.response));
};
