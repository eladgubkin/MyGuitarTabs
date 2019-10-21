import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
// import PrivateRoute from '../common/PrivateRoute'
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

  const [state, setState] = React.useState({
    left: window.innerWidth > 1024 ? true : false
  });

  const toggleDrawer = (side, open) => e => {
    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
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
      <Header toggleDrawer={toggleDrawer} left={state.left} />
      <Sidebar toggleDrawer={toggleDrawer} left={state.left} />
      {showSearchComponent ? <Search /> : <Home />}
      {/* <PrivateRoute exact path="/search/" component={Search} /> */}
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
