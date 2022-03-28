import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);   

    const addItem = (item,quantity) => {     
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...item, quantity};        

        if(isInCart(item.id)) {            
            let index = copiaCarrito.findIndex( prod => prod.id === item.id)
            copiaCarrito[index].quantity += quantity;
            setCarrito(copiaCarrito)
        } 
        else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }        
    }

    const isInCart = (id) => {
        return carrito.some((product)=>{
            return product.id === id
        })
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(product => product.id !== id))
    }

    const clear = () => {
        setCarrito([])
    }

    const calcCantidad = () =>{
        let cantidad = 0;
        carrito.forEach(item => cantidad += item.quantity)
        return cantidad;
    }

    const calcPrecioTotal = () =>{
        let precioTotal = 0
        carrito.forEach(item => precioTotal = precioTotal + item.quantity * item.price )    
        return precioTotal;  
    }

    const valorDelContexto = {
        carrito,      
        addItem,
        clear,
        removeItem,
        calcCantidad: calcCantidad,
        calcPrecioTotal: calcPrecioTotal
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider