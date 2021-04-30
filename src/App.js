import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./pages/ItemListContainer";
/* import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
*/
import Celulares from "./pages/celulares";
import Computadoras from "./pages/computadoras";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const categories = ['celulares', 'computadoras', 'camaras'];

function App() {
  return (
    <BrowserRouter>
      <Navbar categories={categories}/>
      <Switch>
        {/* <ItemCount stock={5} initial={1} /> */}
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/detCont"> 
          <ItemDetailContainer />
        </Route>
        <Route path="/category/:categoryId"> 
          <ItemListContainer />
        </Route>
        <Route path="/category/:categoryId"> 
          <Computadoras />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
/* 
<Route path="/celu/:celuId"> 
*/
export default App;
