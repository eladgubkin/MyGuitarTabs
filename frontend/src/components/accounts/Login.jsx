import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/ducks/auth/actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: 'admin',
    password: '123456'
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.state({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to="/" />;

    // const { username, password } = this.state;

    return (
      <div>
        <h1 onClick={this.onSubmit}>Login</h1>
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
  { login }
)(Login);
