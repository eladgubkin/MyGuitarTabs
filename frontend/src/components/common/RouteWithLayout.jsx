import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RouteWithLayout = ({
  layout: Layout,
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login/" />;
        } else {
          return (
            <>
              <Layout />
              <Component {...props} />
            </>
          );
        }
      }}
    />
  );
};

RouteWithLayout.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(RouteWithLayout);
