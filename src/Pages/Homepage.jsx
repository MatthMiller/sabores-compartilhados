import React from 'react';
import InstitutionalCategoriesLayout from '../Layouts/InstitutionalCategoriesLayout.jsx';
import SeasonalRecipes from '../Components/SeasonalRecipes/SeasonalRecipes.jsx';

const Homepage = () => {
  return (
    <>
      <InstitutionalCategoriesLayout>
        <SeasonalRecipes />
      </InstitutionalCategoriesLayout>
    </>
  );
};

export default Homepage;
