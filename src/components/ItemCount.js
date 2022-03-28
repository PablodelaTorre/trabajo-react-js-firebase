import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    
    let [estado, setEstado] = useState(initial)

    const handleSumar = () => {
        if(estado >= stock){
            return
        }else{
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado===1){
            return
        }else{
            setEstado(estado - 1)
        }
    }

    const handleAgregar = () => {
        onAdd(estado)
    }

    // const onAdd = () => {
    //     console.log("Desea comprar la cantidad de : " + estado + " productos")
    // }


    return (
        <>
            <div className='d-flex align-items-center justify-content-center'>
                <button type='button' className='btn btn-primary' onClick={handleSumar}>+</button>
                <p className='fw-blod fs-4 mx-3 px-2'>{estado}</p>
                <button type='button' className='btn btn-danger' onClick={handleRestar}>-</button>
            </div>
            <div className='container w-50'>
                <div className='row'>
                    <button type='button' className='btn btn-success fs-5' onClick={handleAgregar}>Confirmar cantidad seleccionada</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount