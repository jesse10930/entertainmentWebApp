import React, { useReducer } from 'react';
// import uuid from 'uuid';
import ContentContext from './contentContext';
import contentReducer from './contentReducer';
import { SET_ACTIVE, GET_DATA, SET_BOOKMARK, SET_SEARCH_FIELD } from '../types';

const ContentState = (props) => {
  const initialState = {
    active: 'trending',
    data: [],
    searchField: '',
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

    clickedIcon === 'trending-icon'
      ? (newActive = 'trending')
      : clickedIcon === 'movies-icon'
      ? (newActive = 'movies')
      : clickedIcon === 'series-icon'
      ? (newActive = 'series')
      : clickedIcon === 'bookmarks-icon'
      ? (newActive = 'bookmarks')
      : (newActive = 'trending');

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

  // Set search field
  const setSearchField = (input) => {
    let newSearchField = input;

    dispatch({
      type: SET_SEARCH_FIELD,
      payload: newSearchField,
    });
  };

  return (
    <ContentContext.Provider
      value={{
        active: state.active,
        data: state.data,
        searchField: state.searchField,
        setActive,
        getData,
        setBookmark,
        setSearchField,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentState;
