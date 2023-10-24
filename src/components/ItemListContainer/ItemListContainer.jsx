import style from "./ItemListContainer.module.scss"
import { getProducts } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ hi }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return(
        <>
            <h2 className={style.saludo}>{hi}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer