import React, { useContext, useEffect } from 'react';
import ContentContext from '../../context/content/contentContext';

export const Home = () => {
  const contentContext = useContext(ContentContext);

  useEffect(() => {
    console.log(contentContext);
  });

  const { movies, series } = contentContext;

  return (
    <div>
      <h1>Home</h1>
      <p>movies: {movies}</p>
      <p>{series}</p>
      <button className='btn'>Login to your account</button>
    </div>
  );
};

export default Home;
