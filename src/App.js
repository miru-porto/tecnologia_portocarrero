import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
    return ( <>
         <Navbar />
         {/*<ItemListContainer greeting="Refrigeradora Samsung" />*/}
         <ItemCount stock={5} initial={1}/>
         </>
         
    );
}

export default App;