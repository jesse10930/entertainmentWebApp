import React, { useContext, Fragment } from 'react';
import RecommendedItem from './RecommendedItem';
import ContentContext from '../../context/content/contentContext';

const Recommended = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data } = contentContext;

  // Declare bookmarked movies list
  let bookmarkedMoviesList = data.filter(
    (item) => item.isBookmarked === true && item.category === 'Movie'
  );

  // Delcare bookmared Series List
  let bookmarkedSeriesList = data.filter(
    (item) => item.isBookmarked === true && item.category === 'TV Series'
  );

  return (
    <Fragment>
      <div id='recommended-container'>
        <h1 id='recommended-title' className='section-title heading-l'>
          Bookmarked Movies
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
            />
          ))}
        </div>
      </div>
      <div id='recommended-container'>
        <h1 id='recommended-title' className='section-title heading-l'>
          Bookmarked TV Series{' '}
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
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Recommended;
