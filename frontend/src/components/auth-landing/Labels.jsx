import React from 'react';
import svgLabelOutline from '../../assets/svg/label-outline.svg';
import svgPencilOutline from '../../assets/svg/pencil-outline.svg';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';

const data = ['Rock', 'Jazz', 'Metal', 'Folk', 'Blues', 'Pop', 'Classical'];

const Labels = () => {
  return (
    <>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Labels
          </ListSubheader>
        }
      >
        {data.map((label, i) => {
          return (
            <ListItem button key={i}>
              <ListItemIcon>
                <img src={svgLabelOutline} alt="svgLabelOutline" />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          );
        })}

        <ListItem button>
          <ListItemIcon>
            <img src={svgPencilOutline} alt="svgPencilOutline" />
          </ListItemIcon>
          <ListItemText primary={'Edit labels'} />
        </ListItem>
      </List>
    </>
  );
};

export default Labels;
