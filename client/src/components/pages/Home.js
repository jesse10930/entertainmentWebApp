import React, { useContext, useEffect } from 'react';
// import ContentContext from '../../context/content/contentContext';
import Navbar from '../layouts/Navbar';

export const Home = () => {
  // const contentContext = useContext(ContentContext);

  // useEffect(() => {
  //   console.log(contentContext);
  // });

  // const { movies, series } = contentContext;

  return (
    <div id='home-container'>
      <Navbar />
      {/* <h1>Home</h1>
      <p>movies: {movies}</p>
      <p>{series}</p> */}
    </div>
  );
};

export default Home;
