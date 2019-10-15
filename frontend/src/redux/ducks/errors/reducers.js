import * as types from './types';

const initialState = {};

const errors = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;

    case types.CLEAN_ERRORS:
      return {};

    default:
      return state;
  }
};

const reducer = errors;

export default reducer;
