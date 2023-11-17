import React from 'react';
import style from './InternalPageBanner.module.css';
import backgroundPattern from '../../images/CategoriesHeader/background-pattern.svg';

const InternalPageBanner = ({ title }) => {
  return (
    <>
      <section className={style.section}>
        <div className='g-wrapper'>
          <div className={`${style.geralContainer} g-container`}>
            <h2 className={style.title}>{title}</h2>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${backgroundPattern})` }}
          className={style.sectionBg}
        ></div>
      </section>
    </>
  );
};

export default InternalPageBanner;
