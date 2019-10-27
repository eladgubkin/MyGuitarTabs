import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  return (
    <div id="Loading">
      <CircularProgress size={60} />;{/* <h1>Loading...</h1> */}
    </div>
  );
};

export default Loading;
