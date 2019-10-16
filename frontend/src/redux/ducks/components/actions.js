import * as types from './types';

// Toggle Search component
const toggleSearchComponent = () => dispatch => {
  dispatch({
    type: types.TOGGLE_SEARCH_COMPONENT
  });
};

export { toggleSearchComponent };
