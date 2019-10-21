import React from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import svgGuitarAccoustic from '../../assets/svg/guitar-acoustic.svg';
import svgSettings from '../../assets/svg/settings.svg';
import svgHelp from '../../assets/svg/help.svg';
import PropTypes from 'prop-types';
import Labels from './Labels';

const SidebarContent = props => {
  const { classes } = props;

  return (
    <div id="SidebarContent" className={classes.list} role="presentation">
      <div className="logo">
        <h3>myguitartabs</h3>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <img src={svgGuitarAccoustic} alt="svgGuitarAccoustic" />
          </ListItemIcon>
          <ListItemText primary={'Tabs'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgGuitarAccoustic} alt="svgGuitarAccoustic" />
          </ListItemIcon>
          <ListItemText primary={'Chords'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgGuitarAccoustic} alt="svgGuitarAccoustic" />
          </ListItemIcon>
          <ListItemText primary={'Sheets'} />
        </ListItem>
      </List>
      <Divider />
      <Labels />
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
