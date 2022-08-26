import React, { useContext, useEffect } from 'react';
import ContentContext from '../../context/content/contentContext';
import Navbar from '../layouts/Navbar';
import Searchbar from '../layouts/Searchbar';
import Trending from '../layouts/Trending';
import Content from '../layouts/Content';
import AuthContext from '../../context/auth/authContext';

export const Home = () => {
  // Declare and destructure context
  const contentContext = useContext(ContentContext);
  const { getData } = contentContext;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  // Effect to get data on initial load
  useEffect(() => {
    getData();
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='home-container'>
      <Navbar />
      <Searchbar />
      <div id='content-container'>
        <Trending />
        <Content />
      </div>
    </div>
  );
};

export default Home;
