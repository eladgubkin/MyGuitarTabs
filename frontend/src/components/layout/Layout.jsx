import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout = props => {
  return (
    <>
      <Header toggleDrawer={props.toggleDrawer} left={props.left} />
      <Sidebar toggleDrawer={props.toggleDrawer} left={props.left} />
    </>
  );
};

export default Layout;
