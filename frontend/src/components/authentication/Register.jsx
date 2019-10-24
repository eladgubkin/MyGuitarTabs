import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import useComponentDidMount from '../../hooks/useComponentDidMount';

// Material UI
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button as Btn } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../redux/ducks/authentication/actions';
import { validateRegister, clearErrors } from '../../redux/ducks/errors/actions';

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

const Register = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    name: '',
    password: '',
    password2: ''
  });

  const { email, name, password, password2 } = state;

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  useComponentDidMount(() => props.clearErrors());

  const onSubmit = e => {
    e.preventDefault();

    props.validateRegister({
      email: email.toLowerCase(),
      name,
      password,
      password2
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
        name="name"
        label="Display name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        type="text"
        onChange={onChange}
        variant="standard"
        error={props.errors.name ? true : false}
        helperText={props.errors.name}
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
      <TextField
        name="password2"
        label="Password confirm"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        type="password"
        onChange={onChange}
        variant="standard"
        error={props.errors.password2 ? true : false}
        helperText={props.errors.password2}
      />

      <ColorButton color="primary" className={classes.button} type="submit">
        Register
      </ColorButton>
      <Link to="/">
        <ColorButton color="primary" className={classes.button}>
          Home
        </ColorButton>
      </Link>
      <Link to="/login/">
        <ColorButton color="primary" className={classes.button}>
          Already have an account?
        </ColorButton>
      </Link>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  validateRegister: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { register, validateRegister, clearErrors }
)(Register);
