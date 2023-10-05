import style from "./ItemListContainer.module.scss"

const ItemListContainer = ({ hi }) => {
    return(
        <>
            <h2 className={style.saludo}>{hi}</h2>
        </>
    )
}

export default ItemListContainer