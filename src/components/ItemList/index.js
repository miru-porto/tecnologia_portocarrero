import Item from "../Item";
import "./styles.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="itemList">
        {products.map((p) => (
          <Item product={p} key={p.id} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
