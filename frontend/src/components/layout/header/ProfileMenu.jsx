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
import svgAccountCircle from '../../../assets/svg/account-circle.svg';
import { logout } from '../../../redux/ducks/auth/actions';
import moment from 'moment';

const ProfileMenu = props => {
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
          className="btn"
        >
          <img src={svgAccountCircle} alt="svgAccountCircle" />
        </IconButton>

        <Popper
          id="Menu"
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
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
                    <div className="avatar">
                      <img src={svgAccountCircle} alt="svgAccountCircle" />
                    </div>

                    <div className="info">
                      <span className="name">{props.user.name}</span>
                      <span className="email">alongubkin.gubkin@gmail.com</span>
                    </div>

                    <div className="date">
                      <span>
                        {moment(props.user.created_at).format('MMM D, YYYY')}
                      </span>
                    </div>
                    <div className="logout">
                      <Button color="inherit" onClick={props.logout}>
                        Logout
                      </Button>
                    </div>
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

ProfileMenu.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logout }
)(ProfileMenu);
