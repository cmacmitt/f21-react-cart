import CartItem from "./CartItem";

const Cart = () => {
  return (
    <aside class="cart">
      <h2>Your Cart</h2>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div class="total">Total: $604.93</div>
    </aside>
  );
};

export default Cart;
