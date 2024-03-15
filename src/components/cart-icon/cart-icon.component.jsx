import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { Icon } from '@iconify/react';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <Icon icon="mdi-light:cart" className="shopping-icon" />
      <span className="item-count">
        <span className="count">10</span>
      </span>
    </div>
  );
};

export default CartIcon;
