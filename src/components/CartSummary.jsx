const CartSummary = ({ items, total }) => {
  return (
    <div className="cart-icon">
      <div className="cart-icon-values">
        <div className="cart-total">${total.toFixed(2)}</div>
        <div className="in-cart-items">
          {items} item{items === 1 ? "" : "s"}
        </div>
      </div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartSummary;
