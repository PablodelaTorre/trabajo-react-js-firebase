import React, { useContext, useState } from 'react'
import { contexto } from '../context/CartContext'
import { db } from '../firebase.js'
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { toast } from 'react-toastify'

const Formulario = () => {

    const { carrito, calcPrecioTotal, clear } = useContext(contexto)

    const [nombre, setNombre] = useState()
    const [telefono, setTelefono] = useState()
    const [email, setEmail] = useState()
    
    const handleChangeNombre = (e) =>{
        const value = e.target.value
        setNombre(value)
    }

    const handleChangeTelefono = (e) =>{
        const value = e.target.value
        setTelefono(value)
    }

    const handleChangeEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const terminarCompra = () =>{
        if(nombre !== "" && telefono !== "" && email !== ""){
            const orden = {
                buyer : {
                    name:nombre,
                    phone:telefono,
                    email:email
                },
                items:carrito,
                date:serverTimestamp(),
                total:calcPrecioTotal()
            }
            const ordenesCollection = collection(db, "ventas")
            const pedido = addDoc(ordenesCollection,orden)
    
            pedido.then(res=>{toast.success("Finalizo la compra")}).catch(error=>{toast.error("Hubo un error")})

            setNombre("")
            setTelefono("")
            setEmail("")
            clear()
        } else {
            toast.error("Debe completar todos los campos del formulario")
        }
    }

    return (
        <form action="" onSubmit={onSubmit} className='formulario-compra mt-4'>
            <div className='d-flex justify-content-center my-3'>
                <h2 className='fs-2 fw-bold'>Complete el formulario para terminar la compra</h2>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <input className='form-nombre' type="text" value={nombre} onChange={handleChangeNombre} name='nombre' placeholder='Ingrese su nombre y apellido'/>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <input className='form-telefono' type="text" value={telefono} onChange={handleChangeTelefono} name='telefono' placeholder='Ingrese su teléfono'/>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <input className='form-email' type="email" value={email} onChange={handleChangeEmail} name='email' placeholder='Ingrese su email'/>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <button className='boton-terminado' onClick={terminarCompra}>Finalizar la compra</button>
            </div>
        </form>
    )
}

export default Formulario