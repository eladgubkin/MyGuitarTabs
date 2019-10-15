import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GuestLanding from './GuestLanding';
import Landing from './Landing';

const Test = props => {
  if (props.auth.isAuthenticated) {
    return <Landing />;
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
