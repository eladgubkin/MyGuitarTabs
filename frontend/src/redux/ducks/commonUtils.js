const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers['x-access-token'] = `${token}`;
  }

  return config;
};

export { tokenConfig };
