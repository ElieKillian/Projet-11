import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './main.css';
import Home from './pages/home';
import Login from './pages/sign-in' ;
import User from './pages/user';
import Error from './pages/error';

import Header from './components/header';
import Footer from './components/footer';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <div className='router'>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/sign-in" element={<Login />} />
          <Route path="/user" element={<User />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

// /:id à ajouter à /user
