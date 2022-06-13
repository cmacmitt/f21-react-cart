import Item from "./Item";
const ItemList = ({ items, dispatch }) => {
  return (
    <ul className="items">
      {items.map((item) => (
        <Item key={item.id} item={item} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default ItemList;
