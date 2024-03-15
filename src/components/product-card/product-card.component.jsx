import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-conatianer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => alert('Added to cart')} buttonType="inverted">
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default ProductCard;
