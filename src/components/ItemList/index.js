import Item from "../Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((p) => (
        <Item product={p} key={p.id} />
      ))}
    </div>
  );
};

export default ItemList;
