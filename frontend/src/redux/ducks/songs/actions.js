import * as types from './types';
import axios from 'axios';
import { tokenConfig } from '../commonUtils';

// Get Songs
const getSongs = () => (dispatch, getState) => {
  axios
    .get('http://localhost:8000/api/songs/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: types.GET_SONGS,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data));
};

// Delete Song
const deleteSong = id => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8000/api/songs/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch({
        type: types.DELETE_SONG,
        payload: id
      });
    })
    .catch(err => console.log(err.response.data));
};

export { getSongs, deleteSong };
