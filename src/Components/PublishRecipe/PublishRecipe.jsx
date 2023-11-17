import React from 'react';
import style from './PublishRecipe.module.css';
import formStyle from '../Form/Form.module.css';
import axios from 'axios';
import { API_URL } from '../../config';

const PublishRecipe = () => {
  const [recipeData, setRecipeData] = React.useState({
    title: '',
    videoLink: '',
    content: '',
    categoryId: '',
    estimatedTimeMinutes: '',
    image: '',
    ingredients: [''],
    preparationSteps: [''],
  });
  const [errorMessages, setErrorMessages] = React.useState({
    ingredients: [],
    preparationSteps: [],
  });

  const handleInputChange = (key, value, index) => {
    setRecipeData((prevData) => {
      if (key === 'ingredients' || key === 'preparationSteps') {
        const newList = [...prevData[key]];
        newList[index] = value;
        return { ...prevData, [key]: newList };
      } else {
        return { ...prevData, [key]: value };
      }
    });
  };

  const handleAddField = (key) => {
    const currentList = recipeData[key];

    if (currentList.length > 0 && currentList[currentList.length - 1] === '') {
      setErrorMessages((prevErrors) => {
        const specificErrorMessage =
          key === 'ingredients'
            ? 'Preencha o ingrediente anterior!'
            : 'Preencha a etapa anterior!';

        return {
          ...prevErrors,
          [key]: [...prevErrors[key].slice(0, -1), specificErrorMessage],
        };
      });
    } else {
      setRecipeData((prevData) => ({
        ...prevData,
        [key]: [...currentList, ''],
      }));

      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [key]: [...prevErrors[key], ''],
      }));
    }
  };

  const handleFileChange = async ({ target }) => {
    console.log(target.files);
    if (target.files.length) {
      const fileObject = target.files[0];
      const base64 = await convertBase64(fileObject);
      setRecipeData((previousState) => {
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

  const handleCreateRecipe = () => {
    // Verifica se existem ingredientes e etapas de preparo não vazios
    const nonEmptyIngredients = recipeData.ingredients.filter(Boolean);
    const nonEmptyPreparationSteps =
      recipeData.preparationSteps.filter(Boolean);

    // Se ambos tiverem pelo menos um item não vazio, prossegue com a criação da receita
    if (nonEmptyIngredients.length > 0 && nonEmptyPreparationSteps.length > 0) {
      const recipePayload = {
        title: recipeData.title,
        videoLink: recipeData.videoLink,
        content: JSON.stringify({
          ingredients: nonEmptyIngredients,
          preparationSteps: nonEmptyPreparationSteps,
        }),
        categoryId: recipeData.categoryId,
        estimatedTimeMinutes: recipeData.estimatedTimeMinutes,
        image: recipeData.image,
      };

      // Faz o fetch para criar a receita
      axios
        .post(`${API_URL}/recipes/create`, recipePayload)
        .then(({ data, status }) => {
          console.log(data, status);
          // Limpa os campos ou realiza outras ações necessárias após a criação bem-sucedida
          setRecipeData({
            title: '',
            videoLink: '',
            content: '',
            categoryId: '',
            estimatedTimeMinutes: '',
            image: '',
            ingredients: [''],
            preparationSteps: [''],
          });
        })
        .catch(({ response }) => {
          if (response.data.message) {
            console.log(response.data);
          }
        });
    } else {
      // Adiciona lógica para lidar com casos em que ingredientes ou etapas de preparo estão vazios
      console.log('Preencha pelo menos um ingrediente e uma etapa de preparo.');
    }
  };

  console.log(recipeData);

  return (
    <>
      <section className={style.section}>
        <div className='g-wrapper'>
          <div className={style.container + ' g-container'}>
            <div className={style.uploadContainer}>
              <label htmlFor='imagem'>Imagem da receita</label>
              <input
                onChange={handleFileChange}
                type='file'
                name='imagem'
                id='imagem'
              />
            </div>

            <div className={formStyle.inputContainer}>
              <label className={formStyle.label} htmlFor='title'>
                Título
              </label>
              <input
                type='text'
                id='title'
                value={recipeData.title}
                className={formStyle.input}
                placeholder='Insira aqui o nome da receita'
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </div>

            <div className={formStyle.inputContainer}>
              <label className={formStyle.label} htmlFor='videoLink'>
                Link de vídeo (opcional)
              </label>
              <input
                type='text'
                id='videoLink'
                value={recipeData.videoLink}
                className={formStyle.input}
                placeholder='Insira aqui o link'
                onChange={(e) => handleInputChange('videoLink', e.target.value)}
              />
            </div>

            <div className={formStyle.inputContainer}>
              <label className={formStyle.label} htmlFor='categoryId'>
                Categoria
              </label>
              <input
                type='text'
                id='categoryId'
                value={recipeData.categoryId}
                className={formStyle.input}
                placeholder='Insira aqui o ID da categoria'
                onChange={(e) =>
                  handleInputChange('categoryId', e.target.value)
                }
              />
            </div>

            <div className={formStyle.inputContainer}>
              <label className={formStyle.label} htmlFor='estimatedTimeMinutes'>
                Tempo de preparo (minutos)
              </label>
              <input
                type='number'
                id='estimatedTimeMinutes'
                value={recipeData.estimatedTimeMinutes}
                className={formStyle.input}
                placeholder='Insira aqui o tempo estimado'
                onChange={(e) =>
                  handleInputChange('estimatedTimeMinutes', e.target.value)
                }
              />
            </div>

            <div className={style.ingredientesContainer}>
              <label className={`${formStyle.label} ${style.label}`}>
                Ingredientes
              </label>
              {recipeData.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className={`${formStyle.inputContainer} ${style.inputContainer}`}
                >
                  <input
                    type='text'
                    value={ingredient}
                    className={formStyle.input}
                    placeholder='Ex: 2 xícaras de leite'
                    onChange={(e) =>
                      handleInputChange('ingredients', e.target.value, index)
                    }
                  />
                  {errorMessages.ingredients[index] && (
                    <span className={formStyle.errorMessage}>
                      {errorMessages.ingredients[index]}
                    </span>
                  )}
                </div>
              ))}
              <button
                className={`${formStyle.ghostButton} ${style.addButton}`}
                onClick={() => handleAddField('ingredients')}
              >
                Adicionar ingrediente
              </button>
            </div>

            <div className={style.modoPreparoContainer}>
              <label className={`${formStyle.label} ${style.label}`}>
                Etapas/Modo de preparo
              </label>
              {recipeData.preparationSteps.map((step, index) => (
                <div
                  key={index}
                  className={`${formStyle.inputContainer} ${style.inputContainer}`}
                >
                  <input
                    type='text'
                    value={step}
                    className={formStyle.input}
                    placeholder='Ex: Em uma batedeira bata os ovos...'
                    onChange={(e) =>
                      handleInputChange(
                        'preparationSteps',
                        e.target.value,
                        index
                      )
                    }
                  />
                  {errorMessages.preparationSteps[index] && (
                    <span className={formStyle.errorMessage}>
                      {errorMessages.preparationSteps[index]}
                    </span>
                  )}
                </div>
              ))}
              <button
                className={`${formStyle.ghostButton} ${style.addButton}`}
                onClick={() => handleAddField('preparationSteps')}
              >
                Adicionar etapa
              </button>
            </div>

            <button
              className={`${formStyle.filledButton} ${style.publishRecipe}`}
              onClick={handleCreateRecipe}
            >
              Criar Receita
            </button>
          </div>
        </div>

        {Object.entries(recipeData).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}
      </section>
    </>
  );
};

export default PublishRecipe;
