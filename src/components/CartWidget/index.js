import "./styles.css";

const CartWidget = (product) => {
  return <div className="cartWidgetContainer">
    <img className="img" src="../images/carro-de-la-compra.png" />
    <div className="modal">
      <p>Producto</p>
      <p>Cantidad</p>
      <img src={product.image}/>
    </div>
  </div>;
};

export default CartWidget;
