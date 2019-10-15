import * as types from './types';

const initialState = {
  urls: [],
  tabs: {}
};

const songs = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_URLS:
      return {
        ...state,
        urls: action.payload
      };

    case types.GET_TABS:
      return {
        ...state,
        tabs: action.payload
      };

    default:
      return state;
  }
};

const reducer = songs;

export default reducer;
