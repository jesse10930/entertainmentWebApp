import React, { useReducer } from 'react';
// import uuid from 'uuid';
import ContentContext from './contentContext';
import contentReducer from './contentReducer';
import {
  // UPDATE_BOOKMARKS,
  // SET_CURRENT,
  // FILTER_CONTENT,
  // CLEAR_FILTER,
  SET_ACTIVE,
  GET_DATA,
} from '../types';

const ContentState = (props) => {
  const initialState = {
    active: 'trending',
    data: [],
  };

  const [state, dispatch] = useReducer(contentReducer, initialState);

  // Get Data
  const getData = () => {
    const newData = require('../../data.json');

    dispatch({
      type: GET_DATA,
      payload: newData,
    });
  };

  // Set active category
  const setActive = (clickedIcon) => {
    let newActive;

    switch (clickedIcon) {
      case 'trending-icon':
        newActive = 'trending';
        break;
      case 'movies-icon':
        newActive = 'movies';
        break;
      case 'series-icon':
        newActive = 'series';
        break;
      case 'bookmarks-icon':
        newActive = 'bookmarks';
        break;
      default:
        newActive = 'trending';
    }

    dispatch({
      type: SET_ACTIVE,
      payload: newActive,
    });
  };

  return (
    <ContentContext.Provider
      value={{
        active: state.active,
        data: state.data,
        setActive,
        getData,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentState;
