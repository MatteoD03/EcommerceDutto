const products = [
    {id: "1", name: "Proteína UltraTech", price: 16000, category: "Suplemento", img: "https://ultratechnutrition.com/wp/wp-content/uploads/2018/07/whey_protein_vainilla_tall-1.png", stock: 14, description: "eerereer"},
    {id: "2", name: "Vaso Batidor UltraTech", price: 3000, category: "Accesorios", img: "https://ultratechnutrition.com/wp/wp-content/uploads/2016/09/vaso-ultra-tech.png", stock: 5, description: "eeregggg"},
    {id: "3", name: "Energy Bar UltraTech", price: 9000, category: "Alimentos", img: "https://ultratechnutrition.com/wp/wp-content/uploads/2016/08/energy_bar_caja-1.png", stock: 20, description: "efffffggg"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}