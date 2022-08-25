import React, { useContext, Fragment, useEffect, useState } from 'react';
import ContentContainer from '../layouts/ContentContainer';
import ContentContext from '../../context/content/contentContext';

const Content = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active, setBookmark, searchField } = contentContext;

  // Set initial state
  const [sectionTitle, setSectionTitle] = useState(['']);
  const [activeListArr, setActiveListArr] = useState([]);

  // Find active status and call appropriate method
  useEffect(() => {
    active === 'movies'
      ? getMoviesInfo()
      : active === 'series'
      ? getSeriesInfo()
      : active === 'bookmarks'
      ? getBookmarkedInfo()
      : getRecommendedInfo();
  }, [active, searchField, data]);

  // Get recommended info method
  const getRecommendedInfo = () => {
    let recommendedMoviesList = data.filter((item) => {
      return (
        item.isTrending === false &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    setActiveListArr([recommendedMoviesList]);
    setSectionTitle(['Recommended for you']);
  };

  // Get movies info method
  const getMoviesInfo = () => {
    let moviesList = data.filter(
      (item) =>
        item.category === 'Movie' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setActiveListArr([moviesList]);
    setSectionTitle(['Movies']);
  };

  // Get series info method
  const getSeriesInfo = () => {
    let seriesList = data.filter(
      (item) =>
        item.category === 'TV Series' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setActiveListArr([seriesList]);
    setSectionTitle(['Series']);
  };

  // Get bookmarked info info method
  const getBookmarkedInfo = () => {
    let bookmarkedMoviesList = data.filter(
      (item) =>
        item.isBookmarked === true &&
        item.category === 'Movie' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    let bookmarkedSeriesList = data.filter(
      (item) =>
        item.isBookmarked === true &&
        item.category === 'TV Series' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setActiveListArr([bookmarkedMoviesList, bookmarkedSeriesList]);
    setSectionTitle(['Bookmarked Movies', 'Bookmarked Series']);
  };

  // Handle bookmark click
  const handleBookmarkClick = (clickedTitle) => {
    setBookmark(clickedTitle);
  };

  return (
    <Fragment>
      {activeListArr.map((activeList, i) => {
        return (
          <div id='recommended-container' key={i}>
            <h1 id='recommended-title' className='section-title heading-l'>
              {searchField === ''
                ? sectionTitle[i]
                : `Found ${activeListArr[i].length} ${
                    activeListArr[0].length === 1 ? 'result' : 'results'
                  } for '${searchField}'`}
            </h1>
            <ContentContainer
              activeList={activeList}
              handleBookmarkClick={handleBookmarkClick}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default Content;
