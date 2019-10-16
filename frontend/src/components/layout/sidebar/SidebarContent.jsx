import React from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import svgLabelOutline from '../../../assets/svg/label-outline.svg';
import svgSettings from '../../../assets/svg/settings.svg';
import svgHelp from '../../../assets/svg/help.svg';
import PropTypes from 'prop-types';

const SidebarContent = props => {
  const { classes } = props;

  return (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Tabs'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Chords'} />
        </ListItem>
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Labels
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Bass'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Chords'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <img src={svgSettings} alt="svgSettings" />
          </ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgHelp} alt="svgHelp" />
          </ListItemIcon>
          <ListItemText primary={'Help & feedback'} />
        </ListItem>
      </List>
    </div>
  );
};

SidebarContent.propTypes = {
  side: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default SidebarContent;
