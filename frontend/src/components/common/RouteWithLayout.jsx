import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: sidebarWidth => sidebarWidth
  }
}));

const RouteWithLayout = ({
  layout: Layout,
  component: Component,
  auth,
  showSidebarComponent,
  sidebarWidth,
  ...rest
}) => {
  const classes = useStyles(sidebarWidth);

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
              <div
                className={
                  window.innerWidth > 1024
                    ? clsx(classes.content, {
                        [classes.contentShift]: showSidebarComponent
                      })
                    : null
                }
              >
                <Component {...props} />
              </div>
            </>
          );
        }
      }}
    />
  );
};

RouteWithLayout.propTypes = {
  // Auth
  auth: PropTypes.object.isRequired,

  // Sidebar
  showSidebarComponent: PropTypes.bool.isRequired,
  sidebarWidth: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  // Auth
  auth: state.auth,

  // Sidebar
  showSidebarComponent: state.components.showSidebarComponent,
  sidebarWidth: state.components.sidebarWidth
});

export default connect(mapStateToProps)(RouteWithLayout);
