import React, { useContext, useEffect, useState } from 'react';
import ContentContext from '../../context/content/contentContext';
import TrendingItem from '../cards/TrendingItem';
import AuthContext from '../../context/auth/authContext';

const Trending = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active, setBookmark, searchField } = contentContext;

  const authContext = useContext(AuthContext);
  const { updateBookmarks } = authContext;

  // Declare local state
  const [trendingList, setTrendingList] = useState(
    data.filter((item) => item.isTrending === true)
  );

  // Set local state on page load
  useEffect(() => {
    setTrendingList(data.filter((item) => item.isTrending === true));
  }, [data]);

  // Handle bookmark click
  const handleBookmarkClick = (clickedCategory, clickedTitle) => {
    setBookmark(clickedTitle);
    updateBookmarks(clickedCategory, clickedTitle);
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
