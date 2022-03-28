import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../context/CartContext'
import CarWidget from './CarWidget'


const NavBar = () => {
    
    const {calcCantidad} = useContext(contexto)
    

    if(calcCantidad()==0){
        return (
            <nav className='d-flex 100vw justify-content-between align-items-center bgNav'>
                <Link to="/" className='text-decoration-none link-danger mx-1'><h1 className='fs-2'>Ecommerce</h1></Link>
                <ul className='d-flex mx-4 align-items-center list-unstyled paddingNone marginNone'>
                    <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/men's clothing">Ropa</Link></li>
                    <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/jewelery">Joyería</Link></li>
                    <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/electronics">Electrónicos</Link></li>
                    <li className='mx-3'><Link to="/carrito" className='text-decoration-none link-danger'><CarWidget/></Link></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav className='d-flex 100vw justify-content-between align-items-center bgNav'>
                <Link to="/" className='text-decoration-none link-danger mx-1'><h1 className='fs-2'>Ecommerce</h1></Link>
                <ul className='d-flex mx-4 align-items-center list-unstyled paddingNone marginNone'>
                    <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/men's clothing">Ropa</Link></li>
                    <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/jewelery">Joyería</Link></li>
                    <li className='mx-3 linkNav'><Link className='text-decoration-none linkNav' to="/category/electronics">Electrónicos</Link></li>
                    <li className='mx-3'><Link to="/carrito" className='text-decoration-none link-danger'><CarWidget/>{calcCantidad()}</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar