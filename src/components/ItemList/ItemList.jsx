import style from "./ItemList.module.scss"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className={style.lista}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList