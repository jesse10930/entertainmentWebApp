import React, { useContext, useEffect } from 'react';
import ContentContext from '../../context/content/contentContext';
import Navbar from '../layouts/Navbar';
import Searchbar from '../layouts/Searchbar';
import Trending from '../layouts/Trending';
import Recommended from '../layouts/Recommended';
import Movies from '../layouts/Movies';
import Series from '../layouts/Series';
import Bookmarks from '../layouts/Bookmarks';

export const Home = () => {
  // Declare and destructure context
  const contentContext = useContext(ContentContext);
  const { getData } = contentContext;

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
        {/* <Recommended />
        <Movies />
        <Series />
        <Bookmarks /> */}
      </div>
    </div>
  );
};

export default Home;
