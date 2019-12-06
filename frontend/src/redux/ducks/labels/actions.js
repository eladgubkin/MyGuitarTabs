import * as types from './types';
import axios from 'axios';

// Get all labels
const getLabels = () => dispatch => {
  axios
    .get('/api/labels/all')
    .then(res => {
      dispatch({
        type: types.GET_LABELS,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data));
};

export { getLabels };
