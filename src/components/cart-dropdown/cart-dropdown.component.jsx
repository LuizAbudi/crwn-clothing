import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Finalizar compra</Button>
    </div>
  );
};

export default CartDropdown;
