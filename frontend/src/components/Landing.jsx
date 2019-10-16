import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GuestLanding from './guest-landing/GuestLanding';
import AuthLanding from './auth-landing/AuthLanding';

const Landing = props => {
  if (props.auth.isAuthenticated) {
    return <AuthLanding />;
  } else {
    return <GuestLanding />;
  }
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Landing);
