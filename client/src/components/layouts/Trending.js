import React, { useContext } from 'react';
import ContentContext from '../../context/content/contentContext';
import TrendingItem from '../layouts/TrendingItem';

const Trending = () => {
  // declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active, setBookmark, searchField } = contentContext;

  // Declare movies that are trending
  let trendingList = data.filter((item) => item.isTrending === true);

  // Handle bookmark click
  const handleBookmarkClick = (clickedTitle) => {
    setBookmark(clickedTitle);
  };

  return active === 'trending' && searchField === '' ? (
    <div id='trending-container'>
      <h1 id='trending-title' className='section-title heading-l'>
        Trending
      </h1>
      <div id='trending-list'>
        {trendingList.map((item, i) => (
          <TrendingItem
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
  ) : null;
};

export default Trending;
