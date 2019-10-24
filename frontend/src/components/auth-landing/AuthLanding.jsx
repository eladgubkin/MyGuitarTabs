import React from 'react';
import clsx from 'clsx';
import { Redirect } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Home from './Home';
import Search from './Search';

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

  if (!props.isAuthenticated) return <Redirect to="/" />;

  return (
    <div
      id="AuthLanding"
      className={
        window.innerWidth > 1024
          ? clsx(classes.content, {
              [classes.contentShift]: true
            })
          : null
      }
    >
      <h3>Lol</h3>
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
