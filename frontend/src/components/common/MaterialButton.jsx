import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as Btn } from '@material-ui/core';

const MaterialButton = withStyles(() => ({
  root: {
    color: '#fc6e00'
  }
}))(Btn);

export default MaterialButton;
