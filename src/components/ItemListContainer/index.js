import './style.css';

const ItemListContainer = ({greeting}) => {
    return( <>
    <div className="fondo">
        
        <h1> {greeting}</h1>
            <p> $55000</p>
            <p> Muy buena para el hogar!</p>
        </div>
      
        </>
    );
}

export default ItemListContainer;