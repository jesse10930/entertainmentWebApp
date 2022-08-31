import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PrivateRoute from './components/routing/PrivateRoute';

import ContentState from './context/content/ContentState';
import AuthState from './context/auth/AuthState';

import setAuthToken from './utils/setAuthToken';

import './App.scss';

// set global header for user if token exists
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContentState>
        <Router>
          <div className='App'>
            <Routes>
              <Route
                exact
                path='/'
                element={<PrivateRoute Component={Home} />}
              />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
          </div>
        </Router>
      </ContentState>
    </AuthState>
  );
};

export default App;
