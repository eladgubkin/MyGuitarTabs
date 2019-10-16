import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Search from './Search';

const AuthLanding = props => {
  const { showSearchComponent } = props.components;

  return (
    <div id="AuthLanding">
      <Layout />
      {showSearchComponent ? <Search /> : <h2>AuthLanding</h2>}
    </div>
  );
};

AuthLanding.propTypes = {
  auth: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  components: state.components
});

export default connect(
  mapStateToProps,
  null
)(AuthLanding);
