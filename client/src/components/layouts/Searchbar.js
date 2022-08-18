import React, { useContext, useEffect, useState } from 'react';
import ContentContext from '../../context/content/contentContext';

const Searchbar = () => {
  // Declare and Destructure context
  const contentContext = useContext(ContentContext);
  const { active, searchField, setSearchField } = contentContext;

  // Declare local state
  const [searchBarPlaceHolder, setSearchBarPlaceHolder] = useState(
    'Search for Movies or TV Series'
  );

  // Set search bar placeholder
  useEffect(() => {
    active === 'trending'
      ? setSearchBarPlaceHolder('Search for Movies or TV Series')
      : active === 'movies'
      ? setSearchBarPlaceHolder('Search for Movies')
      : active === 'series'
      ? setSearchBarPlaceHolder('Search for TV Series')
      : active === 'bookmarks'
      ? setSearchBarPlaceHolder('Search for Bookmarked Shows')
      : setSearchBarPlaceHolder('Search for Movies or TV Series');
  }, [active]);

  const onChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div id='searchbar-container'>
      <svg
        id='search-icon'
        width='32'
        height='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z'
          fill='#FFF'
        />
      </svg>
      <input
        type='text'
        className='search-input'
        placeholder={searchBarPlaceHolder}
        value={searchField}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbar;
