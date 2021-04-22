import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <button>click</button>
        </div>
    );
}

export default ItemCount;