import React, { useState } from 'react';

// Components
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = props => {
  const [state, setState] = useState({
    left: window.innerWidth > 1024 ? true : false
  });

  const toggleDrawer = (side, open) => e => {
    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
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
