import './App.css'
import Button from './components/button/button'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Navbar />

      <ItemListContainer hi={"BIENVENIDOS"} />

    </>
  )
}

export default App
