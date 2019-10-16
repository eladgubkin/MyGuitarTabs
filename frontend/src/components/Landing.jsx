import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GuestLanding from './guest-landing/GuestLanding';
import AuthLanding from './auth-landing/AuthLanding';

const Test = props => {
  if (props.auth.isAuthenticated) {
    return <AuthLanding />;
  } else {
    return <GuestLanding />;
  }
};

Test.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Test);
