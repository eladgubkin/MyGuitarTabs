import React from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import svgGuitarAccoustic from '../../../assets/svg/guitar-acoustic.svg';
import svgLabelOutline from '../../../assets/svg/label-outline.svg';
import svgSettings from '../../../assets/svg/settings.svg';
import svgHelp from '../../../assets/svg/help.svg';
import PropTypes from 'prop-types';

const SidebarContent = props => {
  const { classes } = props;

  return (
    <div id="SidebarContent" className={classes.list} role="presentation">
      <List>
        <div className="logo">
          <h3>myguitartabs</h3>
        </div>
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
          <ListItemText primary={'Rock'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Jazz'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Metal'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Folk'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Blues'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Pop'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={svgLabelOutline} alt="svgLabelOutline" />
          </ListItemIcon>
          <ListItemText primary={'Classical'} />
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
