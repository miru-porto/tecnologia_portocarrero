import {useState} from 'react'

const ItemCount = () => {

    const [dni, setDni] = useState('')

    return(
        <div>
            <p>{dni}</p>
            
            <p>Ingrese su dni:</p>
            <input type='text' value={dni} onChange= {(e) => setDni(e.target.value)} />
        </div>
    );
}

export default ItemCount;