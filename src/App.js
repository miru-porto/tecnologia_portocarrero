import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/tecnologia_portocarrero/">
            <ItemListContainer />
          </Route>

          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route path="/tecnologia_portocarrero/cart">
            <Cart />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
