import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Search from './Search';
import Home from './Home';

const drawerWidth = 240;

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
    marginLeft: drawerWidth
  }
}));

const AuthLanding = props => {
  const { showSearchComponent } = props.components;
  const classes = useStyles();

  console.log('innerWidth: ' + window.innerWidth);
  console.log('outerWidth: ' + window.outerWidth);
  const [state, setState] = React.useState({
    left: window.innerWidth > 1024 ? true : false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  if (!props.isAuthenticated) return <Redirect to="/" />;

  return (
    <div
      id="AuthLanding"
      className={
        window.innerWidth > 1024
          ? clsx(classes.content, {
              [classes.contentShift]: state.left
            })
          : null
      }
    >
      <Layout toggleDrawer={toggleDrawer} left={state.left} />
      {showSearchComponent ? <Search /> : <Home />}
    </div>
  );
};

AuthLanding.propTypes = {
  isAuthenticated: PropTypes.bool,
  components: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  components: state.components
});

export default connect(
  mapStateToProps,
  null
)(AuthLanding);
