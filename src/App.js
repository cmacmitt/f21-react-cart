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

  return (
    <>
      <Header>
        <CartSummary />
        <Cart cartItems={cartItems} />
      </Header>
      <main>
        <ItemList items={items} />
      </main>
    </>
  );
}

export default App;
