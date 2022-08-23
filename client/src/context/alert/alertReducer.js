import { SET_ALERT, REMOVE_ALERT } from '../types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        activeAlert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        activeAlert: action.payload,
      };
    default:
      return state;
  }
};

export default alertReducer;
