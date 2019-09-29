import * as types from './types';

const initialState = {
  songs: []
};

const songs = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };

    case types.DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.payload)
      };

    default:
      return state;
  }
};

const reducer = songs;

export default reducer;
