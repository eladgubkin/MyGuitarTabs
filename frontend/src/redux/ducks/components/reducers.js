import * as types from './types';

const initialState = {
  showSearchComponent: false,
  showSidebarComponent: window.innerWidth > 1024,
  sidebarWidth: 260 // 240
};

const components = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_COMPONENT:
      return {
        ...state,
        showSearchComponent: !state.showSearchComponent
      };

    case types.TOGGLE_SIDEBAR_COMPONENT:
      return {
        ...state,
        showSidebarComponent: !state.showSidebarComponent
      };

    default:
      return state;
  }
};

const reducer = components;

export default reducer;
