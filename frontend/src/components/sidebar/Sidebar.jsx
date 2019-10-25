import React from 'react';

// Material UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleSidebarComponent } from '../../redux/ducks/components/actions';

// Components
import SidebarContent from './SidebarContent';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    background: '#f5f5f5',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const Sidebar = props => {
  const { toggleSidebarComponent, showSidebarComponent } = props;
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      id="Sidebar"
      open={showSidebarComponent}
      variant={window.innerWidth > 1024 ? 'persistent' : 'temporary'}
      onClose={toggleSidebarComponent}
      onOpen={toggleSidebarComponent}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleSidebarComponent}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <SidebarContent classes={classes} />
    </SwipeableDrawer>
  );
};

Sidebar.propTypes = {
  toggleSidebarComponent: PropTypes.func.isRequired,
  showSidebarComponent: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showSidebarComponent: state.components.showSidebarComponent
});

export default connect(
  mapStateToProps,
  { toggleSidebarComponent }
)(Sidebar);
