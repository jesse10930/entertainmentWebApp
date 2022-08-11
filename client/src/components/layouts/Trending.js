import React, { useContext } from 'react';
import ContentContext from '../../context/content/contentContext';
import TrendingItem from '../layouts/TrendingItem';

const Trending = () => {
  // declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active } = contentContext;

  // Declare movies that are trending
  let trendingList = data.filter((item) => item.isTrending === true);

  return active === 'trending' ? (
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
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default Trending;
