import * as types from './types';
import axios from 'axios';

// Get many urls by searchString
const getUrls = searchString => dispatch => {
  axios
    .get(`/api/songs/urls?search_string=${searchString}`)
    .then(res => {
      dispatch({
        type: types.GET_URLS,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data));
};

// Get Tabs by url
const getTabs = url => dispatch => {
  axios
    .get(`/api/songs/tabs?url=${url}`)
    .then(res => {
      dispatch({
        type: types.GET_TABS,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data));
};

export { getUrls, getTabs };
