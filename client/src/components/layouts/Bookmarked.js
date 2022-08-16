import React, { useContext, Fragment } from 'react';
import RecommendedItem from './RecommendedItem';
import ContentContext from '../../context/content/contentContext';

const Recommended = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, setBookmark, searchField } = contentContext;

  // Declare bookmarked movies list
  let bookmarkedMoviesList = data.filter(
    (item) =>
      item.isBookmarked === true &&
      item.category === 'Movie' &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
  );

  // Delcare bookmared Series List
  let bookmarkedSeriesList = data.filter(
    (item) =>
      item.isBookmarked === true &&
      item.category === 'TV Series' &&
      item.title.toLowerCase().includes(searchField.toLowerCase())
  );

  // Handle bookmark click
  const handleBookmarkClick = (clickedTitle) => {
    setBookmark(clickedTitle);
  };

  return (
    <Fragment>
      <div id='recommended-container'>
        <h1 id='recommended-title' className='section-title heading-l'>
          {searchField === ''
            ? 'Bookmarked Movies'
            : `Found ${bookmarkedMoviesList.length} Bookmarked Movies for '${searchField}'`}
        </h1>
        <div id='recommended-list'>
          {bookmarkedMoviesList.map((item, i) => (
            <RecommendedItem
              key={i}
              title={item.title}
              thumbnail={item.thumbnail}
              year={item.year}
              category={item.category}
              rating={item.rating}
              bookmarked={item.isBookmarked}
              handleBookmarkClick={handleBookmarkClick}
            />
          ))}
        </div>
      </div>
      <div id='recommended-container'>
        <h1 id='recommended-title' className='section-title heading-l'>
          {searchField === ''
            ? 'Bookmarked TV Series'
            : `Found ${bookmarkedSeriesList.length} Bookmarked TV Series for '${searchField}'`}{' '}
        </h1>
        <div id='recommended-list'>
          {bookmarkedSeriesList.map((item, i) => (
            <RecommendedItem
              key={i}
              title={item.title}
              thumbnail={item.thumbnail}
              year={item.year}
              category={item.category}
              rating={item.rating}
              bookmarked={item.isBookmarked}
              handleBookmarkClick={handleBookmarkClick}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Recommended;
