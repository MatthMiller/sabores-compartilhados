import React from 'react';
import InstitutionalInternalPageLayout from '../Layouts/InstitutionalInternalPageLayout';
import PublishRecipe from '../Components/PublishRecipe/PublishRecipe';

const PublishRecipePage = () => {
  return (
    <>
      <InstitutionalInternalPageLayout title='Publicar receita'>
        <PublishRecipe />
      </InstitutionalInternalPageLayout>
    </>
  );
};

export default PublishRecipePage;
