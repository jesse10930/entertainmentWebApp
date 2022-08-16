import React, { useContext } from 'react';
import RecommendedItem from './RecommendedItem';
import ContentContext from '../../context/content/contentContext';

const Recommended = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active, setBookmark, searchField } = contentContext;

  // Declare recommended list
  let recommendedList = data.filter((item) => {
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

  // Handle bookmark click
  const handleBookmarkClick = (clickedTitle) => {
    setBookmark(clickedTitle);
  };

  return (
    <div id='recommended-container'>
      <h1 id='recommended-title' className='section-title heading-l'>
        {searchField === ''
          ? sectionTitle
          : `Found ${activeList.length} results for '${searchField}'`}
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
            handleBookmarkClick={handleBookmarkClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
