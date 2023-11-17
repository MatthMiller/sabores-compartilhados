import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import GlobalDataContext from './Contexts/GlobalDataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import PublishRecipe from './Pages/PublishRecipe';
import CategoryCreate from './Pages/admin/CategoryCreate';
import LoginPage from './Pages/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalDataContext>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/categorias' element={<Categories />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/publicar-receita' element={<PublishRecipe />} />

          <Route path='/admin/categorias' element={<CategoryCreate />} />
        </Routes>
      </BrowserRouter>
    </GlobalDataContext>
  </React.StrictMode>
);
