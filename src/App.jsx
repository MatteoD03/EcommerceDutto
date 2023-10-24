import './App.css'
import Button from './components/button/button'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {

  return (
    <>
      <Navbar />

      <ItemListContainer hi={"BIENVENIDOS"} />

      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)} />

    </>
  )
}

export default App
