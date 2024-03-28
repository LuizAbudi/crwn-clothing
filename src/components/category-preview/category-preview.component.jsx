import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';
import { Icon } from '@iconify/react';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((product, idx) => idx < 3)
          .map(({ id, ...otherProductProps }) => (
            <ProductCard key={id} product={otherProductProps} />
          ))}
        <div className="see-more-container">
          <Link className="see-more" to={`/shop/${title.toLowerCase()}`}>
            <Icon icon="bi:arrow-right-square-fill" width={50} />
            <span>Veja mais</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
