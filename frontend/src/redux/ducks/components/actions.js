import * as types from './types';

// Toggle Search component
const toggleSearchComponent = () => dispatch => {
  dispatch({
    type: types.TOGGLE_SEARCH_COMPONENT
  });
};

// Toggle Sidebar component
const toggleSidebarComponent = e => dispatch => {
  if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
    return;
  }
  dispatch({
    type: types.TOGGLE_SIDEBAR_COMPONENT
  });
};

export { toggleSearchComponent, toggleSidebarComponent };
