import { useState } from 'react'
import styles from './ItemCount.module.scss'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className={styles.counter}>
            <div className={styles.naaaa}>
                <button className={styles.bt} onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className={styles.bt} onClick={increment}>+</button>
            </div>
            <div>
                <button className={styles.bt} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount