import { SET_ACTIVE, GET_DATA, SET_BOOKMARK, SET_SEARCH_FIELD } from '../types';

const contentReducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload1,
        active: action.payload2,
      };
    case SET_BOOKMARK:
      return {
        ...state,
        data: action.payload,
      };
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
