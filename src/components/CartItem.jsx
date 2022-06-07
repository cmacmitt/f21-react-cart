const CartItem = () => {
  return (
    <li className="cart-item">
      <div className="name">Rival 500</div>
      <div className="quantity">
        <button className="fa fa-minus">
          <i></i>
        </button>
        2
        <button className="fa fa-plus">
          <i></i>
        </button>
      </div>
      <div className="price">@ $109.99</div>
      <button className="remove-from-cart">
        <i className="far fa-times-circle"></i>
      </button>
    </li>
  );
};

export default CartItem;
