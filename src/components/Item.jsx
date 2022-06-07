const Item = ({ item }) => {
  const { id, name, imageURL, description, price } = item;
  return (
    <li className="item">
      <img src={imageURL} />
      <h2>{name}</h2>
      <div className="price">${price.toFixed(2)}</div>
      <div className="description">{description}</div>
      <button>Add to Cart</button>
    </li>
  );
};

export default Item;
