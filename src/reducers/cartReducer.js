const cartReducer = (cartState, action) => {
  const cartItems = [...cartState];
  const id = action.payload.id || action.payload;
  const itemIndex = cartItems.findIndex((item) => item.id === id);

  switch (action.type) {
    case "add":
      if (itemIndex < 0) {
        cartItems.push({ ...action.payload, quantity: 1 });
        return cartItems;
      }
      cartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + 1,
      };
      return cartItems;
    case "remove":
      console.log(JSON.stringify(action));
      return cartState;
    case "increment":
      console.log(JSON.stringify(action));
      return cartState;
    case "decrement":
      console.log(JSON.stringify(action));
      return cartState;
    default:
      throw new Error(JSON.stringify(action));
  }
};

export default cartReducer;

// const handleAddToCart = (itemToAdd) => {
//   // check if the item is in the state already
//   // if it exists, update the quantity
//   // if not, add it to the state

//   setCartItems((prevState) => {
//     const findIndex = cartItems.findIndex((item) => item.id === itemToAdd.id);
//     if (findIndex === -1) {
//       return [...prevState, { ...itemToAdd, quantity: 1 }];
//     }
//     const newCart = [...prevState];
//     newCart[findIndex] = {
//       ...newCart[findIndex],
//       quantity: newCart[findIndex].quantity++,
//     };
//     return newCart;
//   });
// };

// const handleRemoveFromCart = (id) => {
//   setCartItems((prevState) => prevState.filter((item) => item.id !== +id));
// };

// const handleIncrementItemQuantity = (id) => {
//   setCartItems((prevState) => {
//     const itemIndex = cartItems.findIndex((item) => item.id === id);
//     const newCart = [...prevState];
//     newCart[itemIndex] = {
//       ...newCart[itemIndex],
//       quantity: newCart[itemIndex].quantity++,
//     };
//     return newCart;
//   });
// };

// const handleDecrementCartQuantity = (id) => {
//   const itemIndex = cartItems.findIndex((item) => item.id === id);
//   setCartItems((prevState) => {
//     // if the quantity is 1 remove the item from the cart
//     if (prevState[itemIndex].quantity === 1) {
//       return prevState.filter((item) => item.id !== +id);
//     }

//     // Otherwise reduce the quantity by 1
//     const newCart = [...prevState];
//     newCart[itemIndex] = {
//       ...newCart[itemIndex],
//       quantity: newCart[itemIndex].quantity - 1,
//     };
//     return newCart;
//   });

//   // TODO: Explain why this doesn't work or why does work and shouldn't
//   // setCartItems((prevState) => {
//   //   const itemIndex = cartItems.findIndex((item) => item.id === id);

//   //   const newCart = [...prevState];

//   //   if (newCart[itemIndex].quantity === 0) {
//   //     handleRemoveFromCart(id);
//   //   }

//   //   newCart[itemIndex] = {
//   //     ...newCart[itemIndex],

//   //     quantity: newCart[itemIndex].quantity--,
//   //   };

//   //   return newCart;
//   // });
// };
