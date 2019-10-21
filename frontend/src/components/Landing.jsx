import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GuestLanding from './guest-landing/GuestLanding';
import AuthLanding from './auth-landing/AuthLanding';

const Landing = props => {
  if (props.isAuthenticated) {
    return <AuthLanding />;
  } else {
    return <GuestLanding />;
  }
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Landing);
