import React, { useContext, Fragment, useEffect, useState } from 'react';
import ContentContainer from '../layouts/ContentContainer';
import ContentContext from '../../context/content/contentContext';

const Content = () => {
  // Declare and destructure global state
  const contentContext = useContext(ContentContext);
  const { data, active, setBookmark, searchField } = contentContext;

  // Set initial state
  const [sectionTitle, setSectionTitle] = useState('');
  const [activeList, setActiveList] = useState(
    data.filter((item) => {
      return (
        item.isTrending === false &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
      );
    })
  );
  const [bookmarkedSeriesList, setBookmarkedSeriesList] = useState([]);

  // Find active status and call appropriate method
  useEffect(() => {
    active === 'movies'
      ? getMoviesInfo()
      : active === 'series'
      ? getSeriesInfo()
      : active === 'bookmarks'
      ? getBookmarkedInfo()
      : getRecommendedInfo(data);
  }, [active, searchField]);

  // Get recommended info method
  const getRecommendedInfo = (passedData) => {
    let recommendedMoviesList = data.filter((item) => {
      return (
        item.isTrending === false &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    setActiveList(recommendedMoviesList);
    setSectionTitle('Recommended for you');
  };

  // Get movies info method
  const getMoviesInfo = () => {
    let moviesList = data.filter(
      (item) =>
        item.category === 'Movie' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setActiveList(moviesList);
    setSectionTitle('Movies');
  };

  // Get series info method
  const getSeriesInfo = () => {
    let seriesList = data.filter(
      (item) =>
        item.category === 'TV Series' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setActiveList(seriesList);
    setSectionTitle('Series');
  };

  // Get bookmarked info info method
  const getBookmarkedInfo = () => {
    let bookmarkedMoviesList = data.filter(
      (item) =>
        item.isBookmarked === true &&
        item.category === 'Movie' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    let bookmarkedSeriesList = data.filter(
      (item) =>
        item.isBookmarked === true &&
        item.category === 'TV Series' &&
        item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setActiveList(bookmarkedMoviesList);
    setSectionTitle('Bookmarked Movies');
    setBookmarkedSeriesList(bookmarkedSeriesList);
  };

  // Declare content list
  // let contentList = data.filter((item) => {
  //   return (
  //     item.isTrending === false &&
  //     item.title.toLowerCase().includes(searchField.toLowerCase())
  //   );
  // });

  // Declare movies list
  // let moviesList = data.filter((item) => {
  //   return (
  //     item.category === 'Movie' &&
  //     item.title.toLowerCase().includes(searchField.toLowerCase())
  //   );
  // });

  // Declare series list
  // let seriesList = data.filter((item) => {
  //   return (
  //     item.category === 'TV Series' &&
  //     item.title.toLowerCase().includes(searchField.toLowerCase())
  //   );
  // });

  // Declare bookmarked movies list
  // let bookmarkedMoviesList = data.filter(
  //   (item) =>
  //     item.isBookmarked === true &&
  //     item.category === 'Movie' &&
  //     item.title.toLowerCase().includes(searchField.toLowerCase())
  // );

  // Delcare bookmarked Series List
  // let bookmarkedSeriesList = data.filter(
  //   (item) =>
  //     item.isBookmarked === true &&
  //     item.category === 'TV Series' &&
  //     item.title.toLowerCase().includes(searchField.toLowerCase())
  // );

  // Declare title based on active state
  // let sectionTitle =
  //   active === 'movies'
  //     ? 'Movies'
  //     : active === 'series'
  //     ? 'TV Series'
  //     : active === 'bookmarks'
  //     ? 'Bookmarked Movies'
  //     : 'Recommended for you';

  // Declare active content list
  // let activeList =
  //   active === 'movies'
  //     ? moviesList
  //     : active === 'series'
  //     ? seriesList
  //     : active === 'bookmarks'
  //     ? bookmarkedMoviesList
  //     : contentList;

  // Handle bookmark click
  const handleBookmarkClick = (clickedTitle) => {
    setBookmark(clickedTitle);
  };

  return (
    <Fragment>
      <div id='recommended-container'>
        <h1 id='recommended-title' className='section-title heading-l'>
          {searchField === ''
            ? sectionTitle
            : `Found ${activeList.length} ${
                activeList.length === 1 ? 'result' : 'results'
              } for '${searchField}'`}
        </h1>
        <ContentContainer
          activeList={activeList}
          handleBookmarkClick={handleBookmarkClick}
        />
      </div>
      {active === 'bookmarks' ? (
        <div id='recommended-container'>
          <h1 id='recommended-title' className='section-title heading-l'>
            {searchField === ''
              ? 'Bookmarked TV Series'
              : `Found ${bookmarkedSeriesList.length} ${
                  bookmarkedSeriesList.length === 1 ? 'result' : 'results'
                } for '${searchField}'`}{' '}
          </h1>
          <ContentContainer
            activeList={bookmarkedSeriesList}
            handleBookmarkClick={handleBookmarkClick}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default Content;
