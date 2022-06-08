import { Link } from 'react-router-dom';
const CartSummary = ({ items, total, toggleCart }) => {
  return (
    <div className="cart-icon">
      <div className="cart-icon-values">
        <div className="cart-total">${total.toFixed(2)}</div>
        <div className="in-cart-items">
          {items} item{items === 1 ? '' : 's'}
        </div>
      </div>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
};

export default CartSummary;
