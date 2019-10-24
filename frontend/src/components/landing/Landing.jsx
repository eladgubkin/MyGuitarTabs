import React from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Nav from './Nav';
import TypeWriter from './TypeWriter';
import Presentation from './Presentation';
import Button from './Button';

const Landing = props => {
  if (props.isAuthenticated) return <Redirect to="/home/" />;

  return (
    <div id="Landing">
      <div className="container">
        <Nav />
        <TypeWriter />
        <Presentation />
        <Button />
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Landing);
