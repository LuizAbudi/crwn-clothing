import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const renderExistingCategories = () => {
    return Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products} />;
    });
  };

  return <Fragment>{renderExistingCategories()}</Fragment>;
};

export default CategoriesPreview;
