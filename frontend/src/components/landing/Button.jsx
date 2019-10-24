import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button as Btn } from '@material-ui/core';
import { orange, amber } from '@material-ui/core/colors';

const ColorButton = withStyles(theme => ({
  root: {
    // color: theme.palette.getContrastText(amber[800]),
    backgroundColor: amber[900],
    color: '#fff',
    '&:hover': {
      backgroundColor: orange[900]
    }
  }
}))(Btn);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  color: '#fff'
}));

const Button = () => {
  const classes = useStyles();

  return (
    <div id="Button">
      <Link to="/register/">
        <ColorButton variant="contained" color="primary" className={classes.margin}>
          Sign Up
        </ColorButton>
      </Link>
    </div>
  );
};

export default Button;
