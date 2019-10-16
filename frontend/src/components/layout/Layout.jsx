import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

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
