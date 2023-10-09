import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import GlobalDataContext from './Contexts/GlobalDataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalDataContext>
      <Homepage />
    </GlobalDataContext>
  </React.StrictMode>
);
