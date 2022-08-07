import React from 'react';

const TrendingItem = ({ title, year, thumbnail, category, rating }) => {
  return (
    <div className='trending-image'>{(title, year, category, rating)}</div>
  );
};

export default TrendingItem;
