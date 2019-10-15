import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button as Btn } from '@material-ui/core';

const ColorButton = withStyles(theme => ({
  root: {
    color: '#fc6e00'
  }
}))(Btn);

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none'
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div id="Nav">
      <div className="logo">
        <Link to="/">
          <ColorButton color="primary" className={classes.button}>
            myguitartabs
          </ColorButton>
        </Link>
      </div>
      <div className="login">
        <Link to="/login/">
          <ColorButton color="primary" className={classes.button}>
            Login
          </ColorButton>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
