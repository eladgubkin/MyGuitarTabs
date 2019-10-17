import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import accountCircleSvg from '../../../assets/svg/account-circle.svg';
import viewAgendaSvg from '../../../assets/svg/view-agenda.svg';
import magnifySvg from '../../../assets/svg/magnify.svg';
import { connect } from 'react-redux';
import { logout } from '../../../redux/ducks/auth/actions';
import { toggleSearchComponent } from '../../../redux/ducks/components/actions';

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
  const { toggleDrawer, left } = props;
  // const [searchValue, setSearchValue] = useState('');

  const classes = useStyles();

  // const onChange = e => {
  //   setSearchValue(e.target.value);
  //   console.log('Search!');
  // };

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

        {/* <IconButton color="inherit" className="logo-img">
          <img src={svgGuitarAccoustic} alt="svgGuitarAccoustic" />
        </IconButton> */}

        <Typography className="logo" variant="h6" noWrap>
          myguitartabs
        </Typography>
        <div className="grow" />
        <div>
          <IconButton color="inherit" onClick={props.toggleSearchComponent}>
            <img src={magnifySvg} alt="magnifySvg" />
          </IconButton>

          <IconButton aria-label="show more" aria-haspopup="true" color="inherit">
            <img src={viewAgendaSvg} alt="viewAgendaSvg" />
          </IconButton>

          <IconButton color="inherit" onClick={props.logout}>
            <img src={accountCircleSvg} alt="accountCircleSvg" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  left: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  toggleSearchComponent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout, toggleSearchComponent }
)(Header);
