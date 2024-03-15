import { useContext } from 'react';

import { Icon } from '@iconify/react';

import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <Icon icon="mdi-light:cart" className="shopping-icon" />
      <span className="item-count">
        <span className="count">{cartCount}</span>
      </span>
    </div>
  );
};

export default CartIcon;
