import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from './component/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Faq';
import Products from './pages/Products'; 
import i18next from 'i18next';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
