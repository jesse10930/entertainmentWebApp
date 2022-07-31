import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

import ContentState from './context/content/ContentState';

import './App.scss';

const App = () => {
  return (
    <ContentState>
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ContentState>
  );
};

export default App;
