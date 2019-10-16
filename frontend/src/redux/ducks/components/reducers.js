import * as types from './types';

const initialState = {
  showSearchComponent: false
};

const components = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_COMPONENT:
      return {
        showSearchComponent: !state.showSearchComponent
      };

    default:
      return state;
  }
};

const reducer = components;

export default reducer;
