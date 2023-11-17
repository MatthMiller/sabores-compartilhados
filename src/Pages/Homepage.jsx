import React from 'react';
import InstitutionalCategoriesLayout from '../Layouts/InstitutionalCategoriesLayout.jsx';
import SeasonalRecipes from '../Components/SeasonalRecipes/SeasonalRecipes.jsx';
import Feed from '../Components/Feed/Feed.jsx';

const Homepage = () => {
  return (
    <>
      <InstitutionalCategoriesLayout>
        <SeasonalRecipes />
        <Feed />
      </InstitutionalCategoriesLayout>
    </>
  );
};

export default Homepage;
