import { useContext } from 'react';
import Directory from '../../components/directory/directory.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const getTitles = () => {
    return Object.keys(categoriesMap).map((title) => title);
  };

  const getRandomImage = () => {
    return Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      const randomIndex = Math.floor(Math.random() * products.length);
      return products[randomIndex].imageUrl;
    });
  };

  const translateTitles = (titles) => {
    return titles.map((title) => {
      return title === 'hats'
        ? 'BONÉS'
        : title === 'sneakers'
        ? 'TÊNIS'
        : 'UNDEFINED';
    });
  };

  const categories = getTitles().map((title, index) => {
    return {
      id: index,
      title: translateTitles(getTitles())[index],
      imageUrl: getRandomImage()[index],
      linkUrl: title,
    };
  });

  return <Directory categories={categories} />;
};

export default Home;
