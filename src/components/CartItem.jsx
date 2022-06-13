const CartItem = ({ item, dispatch }) => {
  const { id, name, price, quantity } = item;
  return (
    <li className="cart-item">
      <div className="name">{name}</div>
      <div className="quantity">
        <button
          onClick={() => dispatch({ type: "decrement", payload: id })}
          className="fa fa-minus"
        >
          <i></i>
        </button>
        {quantity}
        <button
          onClick={() => dispatch({ type: "increment", payload: id })}
          className="fa fa-plus"
        >
          <i></i>
        </button>
      </div>
      <div className="price">@ ${price.toFixed(2)}</div>
      <button
        onClick={() => dispatch({ type: "remove", payload: id })}
        className="remove-from-cart"
      >
        <i className="far fa-times-circle"></i>
      </button>
    </li>
  );
};

export default CartItem;
