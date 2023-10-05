import CartWidget from "../CartWidget/CartWidget"
import style from "./Navbar.module.scss"

const Navbar = () => {
    return (
        <div className={style.barra}>
            <h1>SuperBody</h1>
            <div className={style.menu}>
                <button>Suplementos</button>
                <button>Accesorios</button>
                <button>Alimentos</button>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar