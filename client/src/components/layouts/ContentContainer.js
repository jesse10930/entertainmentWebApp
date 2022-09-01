import React from 'react';
import ContentItem from '../cards/ContentItem';

const ContentContainer = ({ activeList, handleBookmarkClick, user }) => {
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
          user={user}
          handleBookmarkClick={handleBookmarkClick}
        />
      ))}
    </div>
  );
};

export default ContentContainer;
