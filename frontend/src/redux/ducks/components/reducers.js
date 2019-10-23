import * as types from './types';

const initialState = {
  showSearchComponent: false,
  showResultComponent: false
};

const components = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_COMPONENT:
      return {
        ...state,
        showSearchComponent: !state.showSearchComponent
      };

    case types.TOGGLE_RESULT_COMPONENT:
      return {
        ...state,
        showSearchComponent: false,
        showResultComponent: true
      };

    default:
      return state;
  }
};

const reducer = components;

export default reducer;
