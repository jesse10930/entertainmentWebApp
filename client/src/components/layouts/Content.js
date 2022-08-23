import React, { useContext, Fragment } from 'react';
import ContentContainer from '../layouts/ContentContainer';
import ContentContext from '../../context/content/contentContext';

const Content = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active, setBookmark, searchField } = contentContext;

  // Declare content list
  let contentList = data.filter((item) => {
    return (
      item.isTrending === false &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // Declare movies list
  let moviesList = data.filter((item) => {
    return (
      item.category === 'Movie' &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // Declare series list
  let seriesList = data.filter((item) => {
    return (
      item.category === 'TV Series' &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // Declare bookmarked movies list
  let bookmarkedMoviesList = data.filter(
    (item) =>
      item.isBookmarked === true &&
      item.category === 'Movie' &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
  );

  // Delcare bookmarked Series List
  let bookmarkedSeriesList = data.filter(
    (item) =>
      item.isBookmarked === true &&
      item.category === 'TV Series' &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
  );

  // Declare title based on active state
  let sectionTitle =
    active === 'movies'
      ? 'Movies'
      : active === 'series'
      ? 'TV Series'
      : active === 'bookmarks'
      ? 'Bookmarked Movies'
      : 'Recommended for you';

  // Declare active content list
  let activeList =
    active === 'movies'
      ? moviesList
      : active === 'series'
      ? seriesList
      : active === 'bookmarks'
      ? bookmarkedMoviesList
      : contentList;

  // Handle bookmark click
  const handleBookmarkClick = (clickedTitle) => {
    setBookmark(clickedTitle);
  };

  return (
    <Fragment>
      <div id='recommended-container'>
        <h1 id='recommended-title' className='section-title heading-l'>
          {searchField === ''
            ? sectionTitle
            : `Found ${activeList.length} results for '${searchField}'`}
        </h1>
        <ContentContainer
          activeList={activeList}
          handleBookmarkClick={handleBookmarkClick}
        />
      </div>
      {active === 'bookmarks' ? (
        <div id='recommended-container'>
          <h1 id='recommended-title' className='section-title heading-l'>
            {searchField === ''
              ? 'Bookmarked TV Series'
              : `Found ${bookmarkedSeriesList.length} Bookmarked TV Series for '${searchField}'`}{' '}
          </h1>
          <ContentContainer
            activeList={bookmarkedSeriesList}
            handleBookmarkClick={handleBookmarkClick}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default Content;
