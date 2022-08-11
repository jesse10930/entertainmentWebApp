import React, { useContext } from 'react';
import RecommendedItem from './RecommendedItem';
import ContentContext from '../../context/content/contentContext';

const Recommended = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active } = contentContext;

  // Declare recommended list
  let recommendedList = data.filter((item) => item.isTrending === false);

  // Declare movies list
  let moviesList = data.filter((item) => item.category === 'Movie');

  // Declare series list
  let seriesList = data.filter((item) => item.category === 'TV Series');

  // Declare title based on active state
  let sectionTitle =
    active === 'movies'
      ? 'Movies'
      : active === 'series'
      ? 'TV Series'
      : 'Recommended for you';

  // Declare active content list
  let activeList =
    active === 'movies'
      ? moviesList
      : active === 'series'
      ? seriesList
      : recommendedList;

  return (
    <div id='recommended-container'>
      <h1 id='recommended-title' className='section-title heading-l'>
        {sectionTitle}
      </h1>
      <div id='recommended-list'>
        {activeList.map((item, i) => (
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
  );
};

export default Recommended;
