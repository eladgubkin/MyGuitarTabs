import Validator from 'validator';
import _ from 'lodash';

const validateRegisterInput = ({ email, name, password, password2 }) => {
  let errors = {};

  email = !_.isEmpty(email) ? email : '';
  name = !_.isEmpty(name) ? name : '';
  password = !_.isEmpty(password) ? password : '';
  password2 = !_.isEmpty(password2) ? password2 : '';

  if (!Validator.isLength(name, { min: 2, max: 20 })) {
    errors.name = 'Display name must be between 2 and 20 characters';
  }

  if (Validator.isEmpty(name)) {
    errors.name = 'This field is required';
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'This field is required';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(password, { min: 6, max: 64 })) {
    errors.password = 'Must be between 6 and 64 in length';
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = 'This field is required';
  } else {
    if (!Validator.equals(password, password2)) {
      errors.password2 = "Those passwords didn't match. Try again.";
    }
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

const validateLoginInput = ({ email, password }) => {
  let errors = {};

  email = !_.isEmpty(email) ? email : '';
  password = !_.isEmpty(password) ? password : '';

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'This field is required';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

export { validateRegisterInput, validateLoginInput };
