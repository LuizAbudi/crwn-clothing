import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
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
