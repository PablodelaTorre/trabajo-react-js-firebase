import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <div className="border row d-flex flex-column justify-content-center contenedor-products my-3">
            <h1 className="mb-6 d-flex justify-content-center title-products">{item.title}</h1>
            <img src={item.image} className="card-img-top d-flex justify-content-center imagen-products mt-5" alt="..."/>
            <p className="fs-5 text-success d-flex justify-content-center mt-6">{item.price} $</p>
            <Link to={`/item/${item.id}`} className="detalle-producto"><p>Ver detalles del producto</p></Link>                    
        </div>
    )
}

export default Item