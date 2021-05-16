import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./pages/ItemListContainer";

/* import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
*/
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
/*
const categories = ["Celulares", "Computadoras", "Impresoras"];
*/

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
