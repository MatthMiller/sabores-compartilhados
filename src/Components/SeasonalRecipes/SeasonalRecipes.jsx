import React from 'react';
import style from './SeasonalRecipes.module.css';
import IconOpenInNew from '../../images/CommonIcons/IconOpenInNew';
import IconTimer from '../../images/CommonIcons/IconTimer';
import IconIngredients from '../../images/CommonIcons/IconIngredients';
// import IconCalendar from '../../images/CommonIcons/IconCalendar';
import axios from 'axios';
import { API_URL } from '../../config.js';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';

const SeasonalRecipes = () => {
  const [seasonalData, setSeasonalData] = React.useState('');
  const [isDataLoading, setIsDataLoading] = React.useState(false);

  React.useEffect(() => {
    setIsDataLoading(true);
    axios
      .get(`${API_URL}/recipes-list/getSeasonalList`)
      .then(({ data, status }) => {
        // console.log(data, status);
        if (data) {
          setSeasonalData(data);
        }
        setIsDataLoading(false);
      })
      .catch(({ response }) => {
        if (response) {
          console.log(response.data);
        }
      });
  }, []);

  console.log(seasonalData);

  return (
    <>
      {!seasonalData.length && isDataLoading ? <LoadingSpinner /> : null}

      {seasonalData && seasonalData.recipes.length ? (
        <section
          key={seasonalData.createdAt + seasonalData.title}
          className={style.section + ' g-wrapper'}
        >
          <div className='g-container'>
            <Link to='/' className={style.fullTitleContainer}>
              <h2 className={style.fullTitle}>
                Lista recomendada –{' '}
                <span className={style.listName}>{seasonalData.title}</span>
              </h2>

              <div className={style.listIcon}>
                <IconOpenInNew />
              </div>
            </Link>
            <ul className={style.recipesList}>
              {seasonalData.recipes.length
                ? seasonalData.recipes.map((actualRecipe) => {
                    // const dateObject = new Date(actualRecipe.createdAt);
                    // const actualDate = `${dateObject.getDate()}/${
                    //   dateObject.getMonth() + 1
                    // }/${dateObject.getFullYear()}`;
                    const hours = actualRecipe.estimatedTimeMinutes / 60;
                    const minutes = actualRecipe.estimatedTimeMinutes % 60;

                    return (
                      <li key={actualRecipe.id} className={style.card}>
                        <a href='/' className={style.imageContainer}>
                          <img
                            className={style.image}
                            src={actualRecipe.imagePath}
                            alt={actualRecipe.title}
                          />
                        </a>
                        <div className={style.info}>
                          <div className={style.infoTop}>
                            <Link
                              to={`receita/${actualRecipe.id}`}
                              className={style.infoTop}
                            >
                              <h2
                                title={actualRecipe.title}
                                className={style.recipeTitle}
                              >
                                {actualRecipe.title}
                              </h2>
                            </Link>
                            <Link to={`user/`}>
                              <p className={style.author}>Matheus Monteiro</p>
                            </Link>
                          </div>
                          <ul className={style.infoBottom}>
                            <li className={style.infoItem}>
                              <div className={style.iconContainer}>
                                <IconTimer />
                              </div>
                              <p>
                                {Math.floor(hours) === 0
                                  ? null
                                  : Math.floor(hours) + 'h'}
                                {Math.floor(minutes) + 'min'}
                              </p>
                            </li>
                            <li className={style.infoItem}>
                              <div className={style.iconContainer}>
                                <IconIngredients />
                              </div>
                              <p>{actualRecipe.ingredients} ingredientes</p>
                            </li>
                            {/* <li className={style.infoItem}>
                              <div className={style.iconContainer}>
                                <IconCalendar />
                              </div>
                              <p>{actualDate}</p>
                            </li> */}
                          </ul>
                        </div>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </section>
      ) : null}
      {/* <section className='g-wrapper'>
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
              <a href='/' className={style.imageContainer}>
                <img className={style.image} src={tempImage} alt='title' />
              </a>
              <div className={style.info}>
                <a href='/' className={style.infoTop}>
                  <h2 className={style.recipeTitle}>
                    Bolo caseiro de limão siciliano
                  </h2>
                </a>
                <ul className={style.infoBottom}>
                  <li className={style.infoItem}>
                    <div className={style.iconContainer}>
                      <IconTimer />
                    </div>
                    <p>55min</p>
                  </li>
                  <li className={style.infoItem}>
                    <div className={style.iconContainer}>
                      <IconIngredients />
                    </div>
                    <p>6 ingredientes</p>
                  </li>
                  <li className={style.infoItem}>
                    <div className={style.iconContainer}>
                      <IconCalendar />
                    </div>
                    <p>11/10/2023</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default SeasonalRecipes;
