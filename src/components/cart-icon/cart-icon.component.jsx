import { Icon } from '@iconify/react';
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <Icon icon="mdi-light:cart" className="shopping-icon" />
      <span className="item-count">
        <span className="count">10</span>
      </span>
    </div>
  );
};

export default CartIcon;
