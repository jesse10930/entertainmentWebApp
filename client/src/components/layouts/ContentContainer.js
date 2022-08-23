import React from 'react';
import ContentItem from '../cards/ContentItem';

const ContentContainer = ({ activeList, handleBookmarkClick }) => {
  return (
    <div id='recommended-list'>
      {activeList.map((item, i) => (
        <ContentItem
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
  );
};

export default ContentContainer;
