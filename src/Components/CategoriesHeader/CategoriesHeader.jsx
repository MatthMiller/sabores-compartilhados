import React from 'react';
import style from './CategoriesHeader.module.css';
import backgroundPattern from '../../images/CategoriesHeader/background-pattern.svg';
import categoryImageExample from '../../images/CategoriesHeader/category-image-1.jpg';
import axios from 'axios';
import { API_URL } from '../../config.js';
// import Flickity from 'react-flickity-component';

const CategoriesIcon = () => {
  return (
    <svg
      width='49'
      height='48'
      viewBox='0 0 49 48'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5 22L24.5 4L35.5 22H13.5ZM35.5 44C33 44 30.875 43.125 29.125 41.375C27.375 39.625 26.5 37.5 26.5 35C26.5 32.5 27.375 30.375 29.125 28.625C30.875 26.875 33 26 35.5 26C38 26 40.125 26.875 41.875 28.625C43.625 30.375 44.5 32.5 44.5 35C44.5 37.5 43.625 39.625 41.875 41.375C40.125 43.125 38 44 35.5 44ZM6.5 43V27H22.5V43H6.5ZM35.5 40C36.9 40 38.0833 39.5167 39.05 38.55C40.0167 37.5833 40.5 36.4 40.5 35C40.5 33.6 40.0167 32.4167 39.05 31.45C38.0833 30.4833 36.9 30 35.5 30C34.1 30 32.9167 30.4833 31.95 31.45C30.9833 32.4167 30.5 33.6 30.5 35C30.5 36.4 30.9833 37.5833 31.95 38.55C32.9167 39.5167 34.1 40 35.5 40ZM10.5 39H18.5V31H10.5V39ZM20.6 18H28.4L24.5 11.7L20.6 18Z'
        fill='#C3C988'
      />
    </svg>
  );
};

// IMPLEMENTAR FLICKITY na seleção de categorias
// https://github.com/MatthMiller/celebrec-next/blob/main/components/Depoimentos/Depoimentos.jsx

const CategoriesHeader = () => {
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
      <section className={style.section}>
        <div className='g-wrapper'>
          <div className={`${style.geralContainer} g-container`}>
            <ul className={style.list}>
              <li className={style.category}>
                <div className={style.imageContainer}>
                  <img
                    className={style.image}
                    src={categoryImageExample}
                    alt='Categoria x'
                  />
                </div>
                <p className={style.text}>Doces</p>
              </li>
              {!categoriesList.length && categoriesLoading
                ? 'Loading... (colocar spinner custom)'
                : null}

              {categoriesList.length
                ? categoriesList.map((actualCategory) => (
                    <li className={style.category} key={actualCategory.id}>
                      <div className={style.imageContainer}>
                        <img
                          className={style.image}
                          src={actualCategory.imageLink}
                          alt={`Categoria ${actualCategory.title}`}
                        />
                      </div>
                      <p className={style.text}>{actualCategory.title}</p>
                    </li>
                  ))
                : null}
            </ul>
            <a className={style.categoriesButton} href={'/categorias'}>
              <CategoriesIcon />
              <p>Ver todas as categorias</p>
            </a>
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

export default CategoriesHeader;
