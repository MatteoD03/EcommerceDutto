import style from "./CartWidget.module.scss"

const CartWidget = () => {
    return(
        <button className={style.cart}>
            <i class="bi bi-cart2"></i> :0
        </button>
    )
}

export default CartWidget