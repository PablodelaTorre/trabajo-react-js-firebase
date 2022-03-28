import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'


const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const [items,setItems] = useState([])
    
    const {categoryId} = useParams()
    

    useEffect(()=>{

        toast.info("Cargando productos...")
        const url = `https://fakestoreapi.com/products/${categoryId ? "/category/"+categoryId : ""}`
        
        const pedido = fetch(url)
        
        pedido.then((res)=>{
            return res.json()        
        })
        .then((resultado)=>{
            toast.dismiss()
            setItems(resultado)
        })
        .catch(()=>{
            toast.error("Error al cargar los productos")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId])

    if (loading){
        return (
            <div className='d-flex justify-content-center align-content-center mt-5'>
                <Spinner/>
            </div>
        )
    }else{
        return (
            <>
                <div className='fs-2 fw-bold d-flex justify-content-center itemListContainer my-4 '>{greeting}</div>
                <ItemList items={items}/>
            </>
        )
    }
}
export default ItemListContainer