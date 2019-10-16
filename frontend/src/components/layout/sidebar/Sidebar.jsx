import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import SidebarContent from './SidebarContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const Sidebar = props => {
  const { toggleDrawer, left } = props;
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      open={left}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
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
