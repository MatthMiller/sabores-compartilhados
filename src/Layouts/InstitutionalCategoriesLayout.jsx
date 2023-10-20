import React from 'react';
import Header from '../Components/Header/Header';
import CategoriesHeader from '../Components/CategoriesHeader/CategoriesHeader';

const InstitutionalCategoriesLayout = ({ children }) => {
  return (
    <>
      <Header />
      <CategoriesHeader />
      {children}
    </>
  );
};

export default InstitutionalCategoriesLayout;
