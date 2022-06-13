import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart.jsx";
import CartSummary from "./components/CartSummary";
import ItemList from "./components/ItemList";
import cartReducer from "./reducers/cartReducer";

// temporary items array
import { initialItems, initialCartItems } from "./initialItems";

function App() {
  const [items, setItems] = useState(initialItems);
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const cartTotalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const cartTotalItems = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  return (
    <Router>
      <Header>
        <CartSummary total={cartTotalPrice} items={cartTotalItems} />
      </Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemList items={items} dispatch={dispatch} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                total={cartTotalPrice}
                dispatch={dispatch}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
