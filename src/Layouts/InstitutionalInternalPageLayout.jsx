import React from 'react';
import Header from '../Components/Header/Header';
import InternalPageBanner from '../Components/InternalPageBanner/InternalPageBanner';

const InstitutionalInternalPageLayout = ({ title, children }) => {
  return (
    <>
      <Header />
      <InternalPageBanner title={title} />
      {children}
    </>
  );
};

export default InstitutionalInternalPageLayout;
