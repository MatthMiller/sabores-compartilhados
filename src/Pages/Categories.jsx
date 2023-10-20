import React from 'react';
import InstitutionalCategoriesLayout from '../Layouts/InstitutionalCategoriesLayout';
import AllCategories from '../Components/AllCategories/AllCategories';

const Categories = () => {
  return (
    <>
      <InstitutionalCategoriesLayout>
        <AllCategories />
      </InstitutionalCategoriesLayout>
    </>
  );
};

export default Categories;
