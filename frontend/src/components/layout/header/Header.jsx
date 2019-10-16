import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import useStyles from '../../../hooks/useStyles';
import accountCircleSvg from '../../../assets/svg/account-circle.svg';
import viewAgendaSvg from '../../../assets/svg/view-agenda.svg';
import magnifySvg from '../../../assets/svg/magnify.svg';
import { connect } from 'react-redux';
import { logout } from '../../../redux/ducks/auth/actions';
import { toggleSearchComponent } from '../../../redux/ducks/components/actions';

const Header = props => {
  const { toggleDrawer } = props;
  // const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();

  // const onChange = e => {
  //   setSearchValue(e.target.value);
  //   console.log('Search!');
  // };

  return (
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
        <div className={classes.grow} />
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
