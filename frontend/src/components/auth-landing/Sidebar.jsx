import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
  const { toggleDrawer, left } = props;
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      id="Sidebar"
      open={left}
      variant={window.innerWidth > 1024 ? 'persistent' : 'temporary'}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer('left', false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <SidebarContent
        side="left"
        classes={classes}
        toggleDrawer={toggleDrawer.bind(this)}
      />
    </SwipeableDrawer>
  );
};

Sidebar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  left: PropTypes.bool.isRequired
};

export default Sidebar;
