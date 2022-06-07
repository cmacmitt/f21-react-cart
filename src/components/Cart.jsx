import CartItem from "./CartItem";

const Cart = () => {
  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div className="total">Total: $604.93</div>
    </aside>
  );
};

export default Cart;
