import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrito from './components/Carrito'
import Footer from './components/Footer'
import MiProvider from "./context/CartContext"
import Formulario from './components/Formulario'


const App = () => {
  
  return (
    <BrowserRouter>
      <MiProvider>
        <NavBar/>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a ECOMERCE!!"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos:"/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>    
          <Route path="/formulario" element={<Formulario/>}/>
        </Routes>
        <Footer/>
      </MiProvider>  
    </BrowserRouter>
  )
}

export default App
