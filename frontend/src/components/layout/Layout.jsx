import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} left={state.left} />
      <Sidebar toggleDrawer={toggleDrawer} left={state.left} />
    </>
  );
};

export default Layout;

// const useStyles = makeStyles(theme => ({
//   list: {
//     width: 250
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block'
//     }
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto'
//     }
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer !important'
//   },
//   inputRoot: {
//     color: 'inherit',
//     width: '100%'
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 150,
//       '&:focus': {
//         width: 250
//       }
//     }
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex'
//     }
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none'
//     }
//   }
// }));

// const Layout = props => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = useState({
//     left: false
//   });
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

//   const toggleDrawer = (side, open) => event => {
//     // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//     //   return;
//     // }

//     setAnchorEl({ [side]: open });
//   };

//   // const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   // const handleMenuClose = () => {
//   //   setAnchorEl(null);
//   //   handleMobileMenuClose();
//   // };

//   const handleMobileMenuOpen = event => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   // const renderMenu = (
//   //   <Menu
//   //     anchorEl={anchorEl}
//   //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//   //     id={menuId}
//   //     keepMounted
//   //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//   //     open={isMenuOpen}
//   //     onClose={handleMenuClose}
//   //   >
//   //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//   //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//   //   </Menu>
//   // );

//   const mobileMenuId = 'primary-search-account-menu-mobile';

//   let renderMobileMenu;

//   if (!props.auth.isAuthenticated) {
//     renderMobileMenu = (
//       <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         id={mobileMenuId}
//         keepMounted
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         open={isMobileMenuOpen}
//         onClose={handleMobileMenuClose}
//       >
//         <Link to="/login/">
//           <MenuItem>
//             <IconButton aria-label="show 11 new notifications" color="inherit">
//               <NotificationsIcon />
//             </IconButton>
//             <p>Login</p>
//           </MenuItem>
//         </Link>

//         <Link to="/register/">
//           <MenuItem>
//             <IconButton
//               aria-label="account of current user"
//               aria-controls="primary-search-account-menu"
//               aria-haspopup="true"
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//             <p>Register</p>
//           </MenuItem>
//         </Link>
//       </Menu>
//     );
//   } else {
//     renderMobileMenu = (
//       <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         id={mobileMenuId}
//         keepMounted
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         open={isMobileMenuOpen}
//         onClose={handleMobileMenuClose}
//       >
//         <MenuItem>
//           <IconButton aria-label="show 11 new notifications" color="inherit">
//             <Badge badgeContent={11} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//           <p>Notifications</p>
//         </MenuItem>
//         <MenuItem onClick={handleProfileMenuOpen}>
//           <IconButton
//             aria-label="account of current user"
//             aria-controls="primary-search-account-menu"
//             aria-haspopup="true"
//             color="inherit"
//           >
//             <AccountCircle />
//           </IconButton>
//           <p>Profile</p>
//         </MenuItem>
//       </Menu>
//     );
//   }

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <>
//       <div className={classes.grow}>
//         <AppBar position="static" className="app-bar">
//           <Toolbar>
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer('left', true)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Link to="/">
//               <Typography className={classes.title} variant="h6" noWrap>
//                 MyGuitarTabs
//               </Typography>
//             </Link>
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder="Search Tabs…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </div>
//             <div className={classes.grow} />
//             {props.auth.isAuthenticated ? (
//               <div className={classes.sectionDesktop}>
//                 <IconButton aria-label="show 17 new notifications" color="inherit">
//                   <Badge badgeContent={17} color="secondary">
//                     <NotificationsIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-controls={menuId}
//                   aria-haspopup="true"
//                   onClick={handleProfileMenuOpen}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//               </div>
//             ) : (
//               <div className={classes.sectionDesktop}>
//                 <Link to="/register">
//                   <IconButton aria-label="show 17 new notifications" color="inherit">
//                     Register
//                   </IconButton>
//                 </Link>
//                 <Link to="/login">
//                   <IconButton
//                     edge="end"
//                     aria-label="account of current user"
//                     aria-controls={menuId}
//                     aria-haspopup="true"
//                     onClick={handleProfileMenuOpen}
//                     color="inherit"
//                   >
//                     Login
//                   </IconButton>
//                 </Link>
//               </div>
//             )}

//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-label="show more"
//                 aria-controls={mobileMenuId}
//                 aria-haspopup="true"
//                 onClick={handleMobileMenuOpen}
//                 color="inherit"
//               >
//                 <MoreIcon />
//               </IconButton>
//             </div>
//           </Toolbar>
//         </AppBar>
//         {renderMobileMenu}
//         {/* {renderMenu} */}
//       </div>
//       <SwipeableDrawer
//         open={anchorEl.left}
//         onClose={toggleDrawer('left', false)}
//         onOpen={toggleDrawer('left', true)}
//       >
//         {sideList('left')}
//       </SwipeableDrawer>
//     </>
//   );
// };

// Layout.propTypes = {
//   auth: PropTypes.object.isRequired,
//   logout: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   isSidebarOpen: state.layout.isSidebarOpen
// });

// export default connect(
//   mapStateToProps,
//   { logout }
// )(Layout);
