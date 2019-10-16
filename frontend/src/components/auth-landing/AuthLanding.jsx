import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';

const AuthLanding = () => {
  return (
    <>
      <Layout />
    </>
  );
};

AuthLanding.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AuthLanding);
