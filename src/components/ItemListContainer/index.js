import "./style.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";

const getItems = async () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          name: "iphone 99",
          madeBy: "Apple",
          description: "Muy caro",
        },

        {
          name: "1100",
          madeBy: "Nokia",
          description: "Durisimo!",
        },

        {
          name: "S9",
          madeBy: "Samsung",
          description: "Bueno",
        },

        {
          name: "G1",
          madeBy: "Motorola",
          description: "ultimo modelo",
        },

        {
          name: "Note 10",
          madeBy: "Xiaomi",
          description: "Excelente!!",
        },
      ]);
    }, 2000);
  });

const ItemListContainer = () => {
  const [filter, setFilter] = useState("");

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newFilteredProducts = products.filter((products) =>
      products.madeBy.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  }, [filter]);

  useEffect(() => {
    getItems().then((res) => setProducts(res));
  }, []);

  console.log("filter =>", filter);

  return (
    <>
      <input
        type="text"
        placeholder="Search Phone"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ItemList products={products} />

      <div>
        {filteredProducts.map((product) => (
          <div className="bordesProductos">
            <p>{`${product.madeBy} ${product.name}`}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
