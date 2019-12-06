import * as types from './types';

const initialState = {
  labels: []
};

const labels = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LABELS:
      return {
        ...state,
        labels: action.payload
      };

    default:
      return state;
  }
};

const reducer = labels;

export default reducer;
