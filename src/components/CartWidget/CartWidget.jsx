import style from "./CartWidget.module.scss"

const CartWidget = () => {
    return(
        <button className={style.cart}>
            <i className="bi bi-cart2"></i> :0
        </button>
    )
}

export default CartWidget