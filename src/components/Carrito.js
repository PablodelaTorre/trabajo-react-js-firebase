import React, {useContext} from 'react'
import { contexto } from '../context/CartContext'
import { Link } from 'react-router-dom'


const Carrito = () => {
    
    const {carrito, removeItem, clear, calcCantidad, calcPrecioTotal} = useContext(contexto)
    

    if (carrito == 0){
        return (
            <div className='container d-flex flex-column justify-content-center align-items-center my-5 carrito-vacio'>
                <h2 className='fs1 fw-bold text-light'>Carrito de compras vacío.</h2>
                <Link to="/" className='text-decoration-none btn btn-success fs-3 my-5'>Ver más prductos</Link>
            </div> 
        )
    }else{
        return (
            <>
                <div className='render-carrito container-fluid'>
                    {carrito.map(producto => (
                        <div key={producto.id} className="contenedor-carrito my-4">
                            <img src={producto.image} alt=""/>
                            <p className='d-flex justify-content-center titulo-carrito fw-bold'>{producto.title}</p>
                            <p className='d-flex justify-content-center precio-carrito fw-bold'>{producto.price + "$"}</p>
                            <p className='d-flex justify-content-center cantidad-carrito text-info'>Cantidad: {producto.quantity}</p>
                            <p className='d-flex justify-content-center text-success total-parcial-carrito'>Total parcial: {producto.quantity * producto.price + "$"}</p>
                            <button onClick={() => removeItem(producto.id)} className='eliminar-producto-carrito'>Eliminar Producto</button>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <p className='fs-3 fw-bold text-ligth'>
                        {"Cantidad total de productos: " + calcCantidad()}
                    </p>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <p className='fs-3 fw-bold text-dark'>
                        {"Precio total a pagar: $" + calcPrecioTotal()}
                    </p>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='borrar-productos' onClick={() => clear()}>
                            <p>Borrar productos</p>
                    </button>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='terminar-compra'>
                            <p>Terminar compra</p>
                    </button>
                </div>
            </>
        )
    }
    
}      

export default Carrito