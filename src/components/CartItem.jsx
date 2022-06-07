const CartItem = () => {
  return (
    <li class="cart-item">
      <div class="name">Rival 500</div>
      <div class="quantity">
        <button class="fa fa-minus">
          <i></i>
        </button>
        2
        <button class="fa fa-plus">
          <i></i>
        </button>
      </div>
      <div class="price">@ $109.99</div>
      <button class="remove-from-cart">
        <i class="far fa-times-circle"></i>
      </button>
    </li>
  );
};

export default CartItem;
