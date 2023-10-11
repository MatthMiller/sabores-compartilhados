import React from 'react';
import style from './SeasonalRecipes.module.css';
import IconOpenInNew from '../../images/CommonIcons/IconOpenInNew';
import tempImage from '../../images/CategoriesHeader/category-image-1.jpg';

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
        <ul className={style.recipesList}>
          <li className={style.card}>
            <div className={style.imageContainer}>
              <img className={style.image} src={tempImage} alt='title' />
            </div>
            <div className={style.info}>
              <div className={style.infoTop}>
                <h2 className={style.recipeTitle}>
                  Bolo caseiro de limão siciliano
                </h2>
              </div>
              <ul className={style.infoBottom}>
                <li className={style.infoItem}>
                  <span>🍹</span>
                  <p>55min</p>
                </li>
                <li className={style.infoItem}>
                  <span>🍹</span>
                  <p>55min</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SeasonalRecipes;
