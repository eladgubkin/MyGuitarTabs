import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import _ from 'lodash';

// SVG
import svgViewAgenda from '../../assets/svg/view-agenda.svg';
import svgViewGrid from '../../assets/svg/view-grid-outline.svg';
import svgMagnifyG from '../../assets/svg/magnify.svg';
import svgClose from '../../assets/svg/close.svg';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUrls } from '../../redux/ducks/songs/actions';
import { logout } from '../../redux/ducks/authentication/actions';
import {
  toggleSearchComponent,
  toggleSidebarComponent
} from '../../redux/ducks/components/actions';

// Components
import ProfileMenu from './ProfileMenu';

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: sidebarWidth => `calc(100% - ${sidebarWidth}px)`,
    marginLeft: sidebarWidth => sidebarWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const Header = props => {
  const {
    toggleSidebarComponent,
    showSidebarComponent,
    showSearchComponent,
    sidebarWidth
  } = props;
  const [searchString, setSearchString] = useState('');
  const [svgView, setSvgView] = useState(svgViewGrid);
  const classes = useStyles(sidebarWidth);

  const onChange = e => {
    setSearchString(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!_.isEmpty(searchString)) {
      // props.getUrls(searchString);
      console.log(searchString);
    }
  };

  return (
    <AppBar
      id="Header"
      position="fixed"
      className={
        window.innerWidth > 1024
          ? clsx(classes.appBar, {
              [classes.appBarShift]: showSidebarComponent
            })
          : null
      }
    >
      <Toolbar>
        {showSidebarComponent ? null : (
          <IconButton
            edge="start"
            className="menu-button"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebarComponent}
          >
            <MenuIcon />
          </IconButton>
        )}
        {showSearchComponent ? (
          // Show search bar
          <>
            <div className="animated fadeIn faster searchbox">
              {/* <div className="searchbox"> */}
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
                  onClick={() => {
                    return props.history.goBack() & props.toggleSearchComponent();
                  }}
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
            <Typography
              className="logo"
              variant="h6"
              noWrap
              onClick={() => props.history.push('/home/')}
            >
              myguitartabs
            </Typography>

            <div className="grow" />

            <IconButton
              color="inherit"
              onClick={() => {
                props.history.push('/search/');
                if (props.location.pathname === '/search/') {
                  props.toggleSearchComponent();
                }
              }}
              className="btn"
            >
              <img src={svgMagnifyG} alt="svgMagnifyG" />
            </IconButton>
          </>
        )}
        <>
          <IconButton
            color="inherit"
            className="btn"
            onClick={() => {
              if (svgView === svgViewAgenda) setSvgView(svgViewGrid);
              if (svgView === svgViewGrid) setSvgView(svgViewAgenda);
            }}
          >
            <img src={svgView} alt="svgView" />
          </IconButton>
          <ProfileMenu />
        </>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  // Sidebar
  toggleSidebarComponent: PropTypes.func.isRequired,
  showSidebarComponent: PropTypes.bool.isRequired,
  sidebarWidth: PropTypes.number.isRequired,

  // Search
  toggleSearchComponent: PropTypes.func.isRequired,
  showSearchComponent: PropTypes.bool.isRequired,
  getUrls: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired,

  // Auth
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // Sidebar
  showSidebarComponent: state.components.showSidebarComponent,
  sidebarWidth: state.components.sidebarWidth,

  // Search
  showSearchComponent: state.components.showSearchComponent,
  urls: state.songs.urls,

  // Auth
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout, toggleSearchComponent, getUrls, toggleSidebarComponent }
)(withRouter(Header));
