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
  const { getData, data } = contentContext;

  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;

  // Effect to get data on initial load
  useEffect(() => {
    loadUser();
    getData();

    console.log(data);
    console.log(user);
    // eslint-disable-next-line
  }, []);

  // Effect to update bookmarks for user
  useEffect(() => {
    user &&
      data.map(
        (item) =>
          (user.movies.includes(item.title) ||
            user.series.includes(item.title)) &&
          (item.isBookmarked = true)
      );
  }, [user, data]);

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
