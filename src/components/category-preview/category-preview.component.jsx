import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';
import { useCallback } from 'react';

const CategoryPreview = ({ title, products }) => {
  const navigation = useNavigate();

  const handleClick = useCallback(() => {
    navigation(`/shop/${title.toLowerCase()}`);
  }, [navigation, title]);

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={handleClick}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((product, idx) => idx < 4)
          .map(({ id, ...otherProductProps }) => (
            <ProductCard key={id} product={otherProductProps} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
