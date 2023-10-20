import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import GlobalDataContext from './Contexts/GlobalDataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalDataContext>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/categorias' element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </GlobalDataContext>
  </React.StrictMode>
);
