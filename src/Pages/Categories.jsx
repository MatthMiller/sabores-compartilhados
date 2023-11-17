import React from 'react';
import AllCategories from '../Components/AllCategories/AllCategories';
import InstitutionalInternalPageLayout from '../Layouts/InstitutionalInternalPageLayout';

const Categories = () => {
  return (
    <>
      <InstitutionalInternalPageLayout title='Categorias'>
        <AllCategories />
      </InstitutionalInternalPageLayout>
    </>
  );
};

export default Categories;
