import React from 'react';
import style from './SeasonalRecipes.module.css';
import IconOpenInNew from '../../images/CommonIcons/IconOpenInNew';

// https://github.com/MatthMiller/celebrec-next/blob/main/components/Depoimentos/Depoimentos.jsx

const SeasonalRecipes = () => {
  return (
    <section className='g-wrapper'>
      <div className='g-container'>
        <a href='/' className={style.fullTitleContainer}>
          <h2 className={style.fullTitle}>
            Lista recomendada –{' '}
            <span className={style.listName}>Para a família</span>
          </h2>

          <div className={style.listIcon}>
            <IconOpenInNew />
          </div>
        </a>
        <ul>
          <li>oi</li>
        </ul>
      </div>
    </section>
  );
};

export default SeasonalRecipes;
