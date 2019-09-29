import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/ducks/auth/actions';
import Header from './layout/Header.jsx';

class Landing extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <div id="Landing">
        <Header />
        <h1 onClick={this.props.logout}>Landing Page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Landing);
