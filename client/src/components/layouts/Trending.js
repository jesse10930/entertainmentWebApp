import React, { useContext } from 'react';
import ContentContext from '../../context/content/contentContext';
import TrendingItem from '../layouts/TrendingItem';

const Trending = () => {
  // declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data } = contentContext;

  // Declare movies that are trending
  let trendingList = data.filter((item) => item.isTrending === true);

  return (
    <div id='trending-container'>
      <h1 id='trending-title' className='heading-l'>
        Trending
      </h1>
      <div id='trending-list'>
        {trendingList.map((trendingMovie, i) => (
          <TrendingItem
            key={i}
            title={trendingMovie.title}
            thumbnail={trendingMovie.thumbnail}
            year={trendingMovie.year}
            category={trendingMovie.category}
            rating={trendingMovie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
