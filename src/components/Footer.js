import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <div className='d-flex flex-column container justify-content-center align-items-center bgNav'>
                <div className='row'>
                    <Link to="/" className='text-decoration-none link-danger my-4'><h1 className='fs-2'>Ecommerce</h1></Link>
                </div>
                <div className='footer mx-0 w-100'>
                    <p className='fs-3 fw-bold text-light d-flex justify-content-center'>Contacto:</p>
                    <p className='fs-5 text-light d-flex justify-content-center my-3'>Direccion:<span className='fs-6 px-0 text-light d-flex align-items-center'> Calle 123 pb 5</span></p>
                    <p className='fs-5 text-light d-flex justify-content-center my-3'>Mail:<span className='fs-6 text-light d-flex align-items-center'> mail-correo@correo.com</span></p>
                    <p className='fs-5 text-light d-flex justify-content-center my-3'>Teléfono:<span className='fs-6 text-light d-flex align-items-center'> 11-5555-4444</span></p>
                    <p className='fs-5 text-light d-flex justify-content-center my-3'>Horario de atención:<span className='fs-6 text-light d-flex align-items-center'> 9hs - 18hs</span></p>
                </div>
            </div>
    )
}

export default Footer