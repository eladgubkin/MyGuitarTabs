import React, { useState, useRef, useEffect } from 'react';
import {
  ClickAwayListener,
  IconButton,
  Popper,
  Paper,
  Grow,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import accountCircleSvg from '../../../assets/svg/account-circle.svg';
import { logout } from '../../../redux/ducks/auth/actions';

const Menu = props => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if (props.user === null) {
    return <h1 style={{ background: 'red', height: '100vh' }}>Loading....</h1>;
  } else {
    return (
      <>
        <IconButton
          style={{ outline: 0 }}
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img src={accountCircleSvg} alt="accountCircleSvg" />
        </IconButton>

        <Popper
          id="Menu"
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
          keepMounted
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <div className="maxWidthHeight">
                    <Button className="btn" onClick={props.logout}>
                      Logout
                    </Button>
                    <h3>{props.user.email}</h3>
                    <h3>{props.user.name}</h3>
                    <h4>{props.user.created_at}</h4>
                  </div>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    );
  }
};

Menu.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logout }
)(Menu);
