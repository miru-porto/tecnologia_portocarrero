import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <ItemCount stock={5} initial={1} /> */}
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/detCont"> 
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
