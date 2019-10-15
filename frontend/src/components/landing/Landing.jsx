import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '../layout/Tabs';
import Layout from '../layout/Layout';
const Landing = () => {
  return (
    <div id="Landing">
      <Layout />
      <Tabs />
    </div>
  );
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
