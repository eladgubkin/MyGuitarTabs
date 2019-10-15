import * as types from './types';
import { validateRegisterInput, validateLoginInput } from './utils';
import { register, login } from '../auth/actions';

const validateRegister = ({ email, name, password, password2 }) => dispatch => {
  const { errors, isValid } = validateRegisterInput({
    email,
    name,
    password,
    password2
  });

  if (!isValid) {
    dispatch({
      type: types.GET_ERRORS,
      payload: errors
    });
  } else {
    dispatch(register({ email, name, password }));
  }
};

const validateLogin = ({ email, password }) => dispatch => {
  const { errors, isValid } = validateLoginInput({
    email,
    password
  });

  if (!isValid) {
    dispatch({
      type: types.GET_ERRORS,
      payload: errors
    });
  } else {
    dispatch(login({ email, password }));
  }
};

const clearErrors = () => dispatch => {
  dispatch({
    type: types.CLEAN_ERRORS
  });
};

export { validateRegister, validateLogin, clearErrors };
