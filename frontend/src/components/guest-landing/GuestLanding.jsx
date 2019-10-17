import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import TypeWriter from './TypeWriter';
import Presentation from './Presentation';
import Button from './Button';

const GuestLanding = props => {
  if (props.isAuthenticated) return <Redirect to="/home/" />;

  return (
    <div id="GuestLanding">
      <div className="container">
        <Nav />
        <TypeWriter />
        <Presentation />
        <Button />
      </div>
    </div>
  );
};

GuestLanding.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(GuestLanding);
