import React from 'react';
import Nav from './Nav';
import TypeWriter from './TypeWriter';
import Presentation from './Presentation';
import Button from './Button';

const GuestLanding = () => {
  return (
    <div id="GuestLanding">
      <div className="container">
        <Nav />
        <TypeWriter />
        <Presentation />
        <Button />
      </div>
    </div>
  );
};

export default GuestLanding;
