import React from 'react';
import style from './Feed.module.css';
import { API_URL } from '../../config';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Feed = () => {
  const [feedData, setFeedData] = React.useState([]);
  const [feedLoading, setFeedLoading] = React.useState(false);

  React.useEffect(() => {
    setFeedLoading(true);
    axios.get(`${API_URL}/recipes/feed/recent`).then(({ data, status }) => {
      if (data.recipes?.length) {
        setFeedData(data.recipes);
      }
      setFeedLoading(false);
    });
  }, []);

  return (
    <>
      <section className={style.section + ' g-wrapper'}>
        <div className='g-container'>
          <h5 className={style.sectionTitle}>Últimas receitas publicadas</h5>

          {!feedData.length && feedLoading ? <LoadingSpinner /> : null}

          <ul className={style.list}>
            {feedData.length
              ? feedData.map((actualRecipe) => {
                  return (
                    <li className={style.item}>
                      <div className={style.imageContainer}>
                        <img
                          className={style.image}
                          src={actualRecipe.imagePath}
                          alt={actualRecipe.title}
                        />
                      </div>
                      <div className={style.shadow}>
                        <p className={style.recipeTitle}>
                          {actualRecipe.title}
                        </p>
                        <p className={style.author}>Matheus Monteiro</p>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Feed;
