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
  SET_BOOKMARK,
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

  // Set bookmarked status
  const setBookmark = (clickedTitle) => {
    // Copy data
    let newData = state.data;

    // Find clicked title and store index
    let oldContentIndex = newData.findIndex(
      (content) => content.title === clickedTitle
    );
    let oldContent = newData[oldContentIndex];

    // Set new content object
    oldContent.isBookmarked = !oldContent.isBookmarked;
    let newContent = oldContent;

    // Update data
    newData[oldContentIndex] = newContent;

    dispatch({
      type: SET_BOOKMARK,
      payload: newData,
    });
  };

  return (
    <ContentContext.Provider
      value={{
        active: state.active,
        data: state.data,
        setActive,
        getData,
        setBookmark,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentState;
