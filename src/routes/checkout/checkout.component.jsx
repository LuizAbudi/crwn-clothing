import { useContext, useState, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>{windowWidth < 400 ? 'Prod' : 'Produto'}</span>
        </div>
        <div className="header-block">
          <span>{windowWidth < 400 ? 'Desc' : 'Descrição'}</span>
        </div>
        <div className="header-block">
          <span>{windowWidth < 400 ? 'Qtd' : 'Quantidade'}</span>
        </div>
        <div className="header-block">
          <span>{windowWidth < 400 ? 'Val' : 'Valor'}</span>
        </div>
        <div className="header-block">
          <span>{windowWidth < 400 ? 'Del' : 'Deletar'}</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: R${cartTotal}</div>
    </div>
  );
};

export default Checkout;
