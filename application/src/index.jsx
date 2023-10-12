// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import login from './reducers/login';
// CSS et pages
import './main.css';
import Home from './pages/home';
import Login from './pages/sign-in' ;
import User from './pages/user';
import Error from './pages/error';
// Composants
import Header from './components/header';
import Footer from './components/footer';

const store = createStore(login);
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className='router'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/sign-in" element={<Login />} />
          <Route path="/user/:id" element={<User />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);

// /:id à ajouter à /user
