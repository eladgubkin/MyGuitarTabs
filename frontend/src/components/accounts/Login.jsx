import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/ducks/auth/actions';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button as Btn } from '@material-ui/core';
import { validateLogin, clearErrors } from '../../redux/ducks/errors/actions';
import useComponentDidMount from '../../hooks/useComponentDidMount';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350,
    height: '55px',
    fontFamily: 'Roboto'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: '#fc6e00'
  }
}))(Btn);

const Login = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = state;

  useComponentDidMount(() => props.clearErrors());

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    props.validateLogin({
      email: email.toLowerCase(),
      password
    });
  };

  if (props.isAuthenticated) return <Redirect to="/" />;

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit.bind(this)}
    >
      <TextField
        name="email"
        label="Email address"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        type="email"
        onChange={onChange}
        variant="standard"
        error={props.errors.email ? true : false}
        helperText={props.errors.email}
      />

      <TextField
        name="password"
        label="Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        type="password"
        onChange={onChange}
        variant="standard"
        error={props.errors.password ? true : false}
        helperText={props.errors.password}
      />

      <ColorButton color="primary" className={classes.button} type="submit">
        Login
      </ColorButton>
      <Link to="/">
        <ColorButton color="primary" className={classes.button}>
          Home
        </ColorButton>
      </Link>
      <Link to="/register/">
        <ColorButton color="primary" className={classes.button}>
          Don't have an account?
        </ColorButton>
      </Link>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  validateLogin: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login, validateLogin, clearErrors }
)(Login);
