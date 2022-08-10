import React, { useContext } from 'react';
import RecommendedItem from './RecommendedItem';
import ContentContext from '../../context/content/contentContext';

const Recommended = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data } = contentContext;

  // Declare recommended list
  let recommendedList = data.filter((item) => item.isTrending === false);

  return (
    <div id='recommended-container'>
      <h1 id='recommended-title' className='section-title heading-l'>
        Recommended for you
      </h1>
      <div id='recommended-list'>
        {recommendedList.map((recommendedObj, i) => (
          <RecommendedItem
            key={i}
            title={recommendedObj.title}
            thumbnail={recommendedObj.thumbnail}
            year={recommendedObj.year}
            category={recommendedObj.category}
            rating={recommendedObj.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
