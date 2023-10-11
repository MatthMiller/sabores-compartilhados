import React from 'react';
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
