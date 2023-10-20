import axios from 'axios';
import React from 'react';
import { API_URL } from '../../config';
import style from './AllCategories.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AllCategories = () => {
  const [categoriesList, setCategoriesList] = React.useState([]);
  const [categoriesLoading, setCategoriesLoading] = React.useState(false);

  React.useEffect(() => {
    setCategoriesLoading(true);
    axios.get(`${API_URL}/categories/all`).then(({ data, status }) => {
      console.log(data, status);
      if (data.length) {
        setCategoriesList(data);
      }
      setCategoriesLoading(false);
    });
  }, []);

  return (
    <>
      <main className='g-wrapper'>
        <div className='g-container'>
          {!categoriesList.length && categoriesLoading ? (
            <LoadingSpinner />
          ) : null}

          <ul className={style.list} aria-label='Lista de categorias'>
            {categoriesList.length
              ? categoriesList.map((actualCategory, index) => {
                  if (index >= 14) {
                    return null;
                  }

                  return (
                    <li className={style.category} key={actualCategory.id}>
                      <img
                        className={style.image}
                        src={actualCategory.imageLink}
                        alt={`Categoria ${actualCategory.title}`}
                      />
                      <div className={style.textContainer}>
                        <p className={style.text}>{actualCategory.title}</p>
                        <div className={style.shadow}></div>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </main>
    </>
  );
};

export default AllCategories;
