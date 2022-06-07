import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart.jsx";
import CartSummary from "./components/CartSummary";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <Header>
        <CartSummary />
        <Cart />
      </Header>
      <main>
        <ItemList />
      </main>
    </>
  );
}

export default App;
