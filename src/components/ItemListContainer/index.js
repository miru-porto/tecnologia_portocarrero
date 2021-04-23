import './style.css';
import { useEffect, useState } from 'react';

const ItemListContainer = ({greeting}) => {
    const [filter, setFilter] = useState('')

    const [products, setProducts]= useState([
        {
            name:'iphone 99',
            madeBy:'Apple',
            description:'Muy caro'
        },

        {
            name:'1100',
            madeBy:'Nokia',
            description:'Durisimo!'
        },
        
        {
            name:'S9',
            madeBy:'Samsung',
            description:'Bueno'
        },
        
        {
            name:'G1',
            madeBy:'Motorola',
            description:'ultimo modelo'
        },

        {
            name:'Note 10',
            madeBy:'Xiaomi',
            description:'Excelente!!'
        }]
        )

    const[filteredProducts, setFilteredProducts] = useState(products)

    useEffect(( )=> {
            const newFilteredProducts = products.filter((products) => 
            products.madeBy.toLowerCase().includes(filter.toLowerCase())

            )
            setFilteredProducts(newFilteredProducts)
        }, [filter])

    console.log('filter =>', filter);

    return( <>
        <div className="fondo">
            <h1>{greeting}</h1>
            <p> $55000</p>
            <p> Muy buena para el hogar!</p>
        </div>
         
        <input
        type='text' 
        placeholder='Search Phone'
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        />

        <div>
            {filteredProducts.map((product) =>(  
                        <div className="bordesProductos">
                            <p>{`${product.madeBy} ${product.name}`}</p>
                            <p>{product.description}</p>
                        </div>
            ))}
        </div>
        </>
    );
}

export default ItemListContainer;