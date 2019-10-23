import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import svgViewAgenda from '../../assets/svg/view-agenda.svg';
import svgMagnifyG from '../../assets/svg/magnify.svg';
import svgClose from '../../assets/svg/close.svg';
import { connect } from 'react-redux';
import { logout } from '../../redux/ducks/authentication/actions';
import {
  toggleSearchComponent,
  toggleResultComponent
} from '../../redux/ducks/components/actions';
import ProfileMenu from './ProfileMenu';
import _ from 'lodash';
import { getUrls } from '../../redux/ducks/songs/actions';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const Header = props => {
  const { toggleDrawer, left, showSearchComponent } = props;
  const [searchString, setSearchString] = useState('');
  const classes = useStyles();

  const onChange = e => {
    setSearchString(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!_.isEmpty(searchString)) {
      // props.getUrls(searchString);
      console.log('lol');
    }
  };

  return (
    <AppBar
      id="Header"
      position="fixed"
      className={
        window.innerWidth > 1024
          ? clsx(classes.appBar, {
              [classes.appBarShift]: left
            })
          : null
      }
    >
      <Toolbar>
        {left ? null : (
          <IconButton
            edge="start"
            className="menu-button"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        {showSearchComponent ? (
          // Show search bar
          <>
            <div className="animated fadeIn faster searchbox">
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <IconButton className="btn-search" onClick={onSubmit} type="submit">
                  <img src={svgMagnifyG} alt="svgMagnifyG" />
                </IconButton>
                <InputBase
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchString}
                  variant="standard"
                  onChange={onChange}
                />
                <IconButton
                  className="btn-close"
                  onClick={props.toggleSearchComponent}
                  type="button"
                >
                  <img src={svgClose} alt="svgClose" />
                </IconButton>
              </form>
            </div>
            <div className="grow" />
          </>
        ) : (
          // No search bar
          <>
            <Typography className="logo" variant="h6" noWrap>
              myguitartabs
            </Typography>
            <div className="grow" />
            <IconButton
              color="inherit"
              onClick={props.toggleSearchComponent}
              className="btn"
            >
              <img src={svgMagnifyG} alt="svgMagnifyG" />
            </IconButton>
          </>
        )}
        <>
          <IconButton color="inherit" className="btn">
            <img src={svgViewAgenda} alt="svgViewAgenda" />
          </IconButton>
          <ProfileMenu />
        </>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  left: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  toggleSearchComponent: PropTypes.func.isRequired,
  showSearchComponent: PropTypes.bool.isRequired,
  getUrls: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired,
  toggleResultComponent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  showSearchComponent: state.components.showSearchComponent,
  urls: state.songs.urls
});

export default connect(
  mapStateToProps,
  { logout, toggleSearchComponent, getUrls, toggleResultComponent }
)(Header);
