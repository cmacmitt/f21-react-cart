import CartItem from "./CartItem";

const Cart = ({ cartItems, total, remove, increment, decrement }) => {
  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            remove={remove}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </ul>
      <div className="total">Total: ${total.toFixed(2)}</div>
    </aside>
  );
};

export default Cart;
