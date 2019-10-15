import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import useStyles from '../../hooks/useStyles';
import { connect } from 'react-redux';
import { logout } from '../../redux/ducks/auth/actions';

const Header = props => {
  const { toggleDrawer } = props;
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();

  const onChange = e => {
    setSearchValue(e.target.value);
    console.log('Search!');
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" id="Header">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            myguitartabs
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Tabs…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChange}
              value={searchValue}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              onClick={props.logout}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  left: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
