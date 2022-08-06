import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import ContentState from './context/content/ContentState';

import './App.scss';

const App = () => {
  return (
    <ContentState>
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
          {/* </Navbar> */}
        </div>
      </Router>
    </ContentState>
  );
};

export default App;
