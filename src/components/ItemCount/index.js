import { useState } from 'react';
import Navbar from '../Navbar';

const ItemCount = () => {
    const [products, setProducts]= useState(
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
            description:'Muy recomensable'
        }
        )

    return ( 
        <div>
            <Navbar products="products"/>
            <div>
                <div>
                    <h4>{}</h4>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;