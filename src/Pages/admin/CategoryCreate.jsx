import axios from 'axios';
import React from 'react';
import { API_URL } from '../../config';

const CategoryCreate = () => {
  const [categoryData, setCategoryData] = React.useState({
    title: '',
    image: '',
  });

  const handleFetch = () => {
    console.log(categoryData);
    axios
      .post(`${API_URL}/categories/create`, categoryData)
      .then(({ data, status }) => {
        console.log(data, status);
      })
      .catch(({ response }) => {
        if (response.data.message) {
          console.log(response.data);
        }
      });
  };

  const handleChangeTitle = ({ target }) => {
    setCategoryData((previousState) => {
      return {
        ...previousState,
        title: target.value,
      };
    });
  };

  const handleFileChange = async ({ target }) => {
    console.log(target.files);
    if (target.files.length) {
      const fileObject = target.files[0];
      const base64 = await convertBase64(fileObject);
      setCategoryData((previousState) => {
        return {
          ...previousState,
          image: base64,
        };
      });
    }
  };

  const convertBase64 = (fileObject) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(fileObject);

      fileReader.onload = () => {
        resolve(fileReader.result.split(',')[1]);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <div className='g-wrapper'>
        <div className='g-container'>
          <label htmlFor='categoria'>Nome da categoria</label>
          <input
            value={categoryData.title}
            onChange={handleChangeTitle}
            type='text'
            name='categoria'
            id='categoria'
          />

          <br />

          <label htmlFor='imagem'>Upload imagem</label>
          <input
            onChange={handleFileChange}
            type='file'
            name='imagem'
            id='imagem'
          />

          <br />
          <button
            onClick={handleFetch}
            style={{
              backgroundColor: 'tomato',
              color: 'white',
              padding: '5px',
              cursor: 'pointer',
            }}
          >
            Salvar categoria
          </button>

          <br />
          {categoryData.title.length ? categoryData.title : null}
          <br />
          {categoryData.image.length ? categoryData.image : null}
        </div>
      </div>
    </>
  );
};

export default CategoryCreate;
