import React from 'react';
import Header from '../Components/Header/Header.jsx';
import CategoriesHeader from '../Components/CategoriesHeader/CategoriesHeader.jsx';
import InstitutionalNavLayout from '../Layouts/InstitutionalNavLayout.jsx';
import SeasonalRecipes from '../Components/SeasonalRecipes/SeasonalRecipes.jsx';

const Homepage = () => {
  return (
    <>
      <InstitutionalNavLayout>
        <SeasonalRecipes />
      </InstitutionalNavLayout>
    </>
  );
};

export default Homepage;
