import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContentContext from './contentContext';
import contentReducer from './contentReducer';
import {
  UPDATE_BOOKMARKS,
  SET_CURRENT,
  FILTER_CONTENT,
  CLEAR_FILTER,
} from '../types';

const ContentState = (props) => {
  const initialState = {
    movies: ['Star Wars'],
    series: [],
  };

  const [state, dispatch] = useReducer(contentReducer, initialState);

  return (
    <ContentContext.Provider
      value={{
        movies: state.movies,
        series: state.series,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentState;
