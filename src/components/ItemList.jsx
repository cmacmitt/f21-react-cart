import Item from "./Item";
const ItemList = ({ items, addToCart }) => {
  return (
    <ul className="items">
      {items.map((item) => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </ul>
  );
};

export default ItemList;
