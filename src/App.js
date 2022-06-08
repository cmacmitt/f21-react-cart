import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart.jsx';
import CartSummary from './components/CartSummary';
import ItemList from './components/ItemList';

// temporary items array
import { initialItems, initialCartItems } from './initialItems';
function App() {
  const [items, setItems] = useState(initialItems);
  const [cartItems, setCartItems] = useState(initialCartItems);

  const cartTotalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const cartTotalItems = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  const handleAddToCart = (itemToAdd) => {
    // check if the item is in the state already
    // if it exists, update the quantity
    // if not, add it to the state

    setCartItems((prevState) => {
      const findIndex = cartItems.findIndex((item) => item.id === itemToAdd.id);
      if (findIndex === -1) {
        return [...prevState, { ...itemToAdd, quantity: 1 }];
      }
      const newCart = [...prevState];
      newCart[findIndex] = {
        ...newCart[findIndex],
        quantity: newCart[findIndex].quantity++,
      };
      return newCart;
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== +id));
  };

  const handleIncrementItemQuantity = (id) => {
    setCartItems((prevState) => {
      const itemIndex = cartItems.findIndex((item) => item.id === id);
      const newCart = [...prevState];
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: newCart[itemIndex].quantity++,
      };
      return newCart;
    });
  };

  const handleDecrementCartQuantity = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    setCartItems((prevState) => {
      // if the quantity is 1 remove the item from the cart
      if (prevState[itemIndex].quantity === 1) {
        return prevState.filter((item) => item.id !== +id);
      }

      // Otherwise reduce the quantity by 1
      const newCart = [...prevState];
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: newCart[itemIndex].quantity - 1,
      };
      return newCart;
    });

    // TODO: Explain why this doesn't work or why does work and shouldn't
    // setCartItems((prevState) => {
    //   const itemIndex = cartItems.findIndex((item) => item.id === id);

    //   const newCart = [...prevState];

    //   if (newCart[itemIndex].quantity === 0) {
    //     handleRemoveFromCart(id);
    //   }

    //   newCart[itemIndex] = {
    //     ...newCart[itemIndex],

    //     quantity: newCart[itemIndex].quantity--,
    //   };

    //   return newCart;
    // });
  };

  return (
    <Router>
      <Header>
        <CartSummary total={cartTotalPrice} items={cartTotalItems} />
      </Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemList items={items} addToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                total={cartTotalPrice}
                remove={handleRemoveFromCart}
                increment={handleIncrementItemQuantity}
                decrement={handleDecrementCartQuantity}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
