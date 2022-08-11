import React, { useContext, useEffect } from 'react';
import ContentContext from '../../context/content/contentContext';
import Navbar from '../layouts/Navbar';
import Searchbar from '../layouts/Searchbar';
import Trending from '../layouts/Trending';
import Recommended from '../layouts/Recommended';
import Bookmarked from '../layouts/Bookmarked';

export const Home = () => {
  // Declare and destructure context
  const contentContext = useContext(ContentContext);
  const { active, getData } = contentContext;

  // Effect to get data on initial load
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='home-container'>
      <Navbar />
      <Searchbar />
      <div id='content-container'>
        <Trending />
        {active !== 'bookmarks' ? <Recommended /> : <Bookmarked />}
      </div>
    </div>
  );
};

export default Home;
