import * as types from './types';

// Toggle Search component
const toggleSearchComponent = () => dispatch => {
  dispatch({
    type: types.TOGGLE_SEARCH_COMPONENT
  });
};

// Toggle Result component
const toggleResultComponent = () => dispatch => {
  dispatch({
    type: types.TOGGLE_RESULT_COMPONENT
  });
};

export { toggleSearchComponent, toggleResultComponent };
