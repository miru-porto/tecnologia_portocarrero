import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemCount stock={5} initial={1} /> */}
      <ItemListContainer/>
    </>
  );
}

export default App;
