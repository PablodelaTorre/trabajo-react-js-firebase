import React from 'react'
import ItemCount from './ItemCount'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { contexto } from '../context/CartContext';

const ItemDetail = ({item}) => {
    
    const { addItem } = useContext(contexto)

    const [cantidad, setCantidad] = useState(0)

    const onAdd =(cantidad) => {
        setCantidad(cantidad)
        addItem(item, cantidad)
    }

    return (
        <article className='contenedor-detalle'>
            <img src={item.image} alt="..." className='imagen-detalle'/>
            <h1 className=''>{item.title}</h1>
            <p className='fs-4 text-success precio-detalle'>{item.price} $</p>
            <p className="fs-6 d-flex justify-content-center descripcion-detalle">{item.description}</p> 
            <div className='rate-detalle'><Rate count={5} value={item.rating.rate}/></div>
            
            {cantidad === 0 ?(
                <div className="contador-stock"><ItemCount stock={6} initial={1} onAdd={onAdd}/></div>
            ) : (
                <>
                    <div className='ir-carrito-detalle'><Link to="/carrito" className='btn btn-primary'>Ir al Carrito</Link></div>
                    <button className='boton-reiniciar-detalle btn btn-danger my-2' onClick={() => {setCantidad(0)}}>Reiniciar la compra.</button>            
                </>
            )

            }
        </article>
    )
}

export default ItemDetail