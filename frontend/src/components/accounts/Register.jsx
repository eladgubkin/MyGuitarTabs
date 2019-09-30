import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../redux/ducks/auth/actions';
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    username: 'admin',
    email: 'admin@demo.com',
    password: '123456',
    password2: '123456'
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.state({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;

    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      const newUser = {
        username,
        password,
        email
      };

      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to="/" />;

    // const { username, email, password, password2 } = this.state;

    return (
      <div>
        <h1 onClick={this.onSubmit}>Register</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
