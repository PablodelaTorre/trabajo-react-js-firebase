import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <>
            <div className="row mx-2 my-4">
                <div className="border d-flex flex-column justify-content-center contenedor-products">
                    
                    <h1 className="fs-5 mb-6 d-flex justify-content-center title-products">{item.title}</h1>
                    <img src={item.image} className="card-img-top d-flex justify-content-center imagen-products mt-5" alt="..."/>
                    <p className="fs-5 text-success d-flex justify-content-center mt-6">{item.price} $</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary detalle-producto">Ver detalles del producto</Link>
                    
                </div>
            </div>    
        </>
    )
}

export default Item