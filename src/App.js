import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart.jsx";
import CartSummary from "./components/CartSummary";
import ItemList from "./components/ItemList";

// temporary items array
import { initialItems, initialCartItems } from "./initialItems";
function App() {
  const [items, setItems] = useState(initialItems);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartOpen, setCartOpen] = useState(false);

  const cartTotalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const cartTotalItems = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  const handleToggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header>
        <CartSummary
          toggleCart={handleToggleCart}
          total={cartTotalPrice}
          items={cartTotalItems}
        />
        {cartOpen && <Cart cartItems={cartItems} total={cartTotalPrice} />}
      </Header>
      <main>
        <ItemList items={items} />
      </main>
    </>
  );
}

export default App;
