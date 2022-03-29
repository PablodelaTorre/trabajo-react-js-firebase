import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { db } from '../firebase.js'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const [items,setItems] = useState([])
    
    const {categoryId} = useParams()

    useEffect(()=>{
        
        if(!categoryId){
            toast.info("Cargando productos...")
            const productosCollection = collection(db,"productos")
        
            const consulta = getDocs(productosCollection)
        
            consulta
            .then((resultado)=>{
                const arrProductos = resultado.docs.map((doc)=>{
                    return doc.data()
                })
                setItems(arrProductos)

            }).catch(()=>{
                toast.error("Error al cargar los productos")

            }).finally(()=>{
                setLoading(false)
            })
        } else {
            const productosCollection = collection(db, "productos")
            const filtro = query(productosCollection,where("category","==", categoryId))
            const consulta = getDocs(filtro)

            consulta
            .then((resultado)=>{
                const arrProductos = resultado.docs.map((doc)=>{
                    return doc.data()
                })
                setItems(arrProductos)

            }).catch(()=>{
                toast.error("Error al cargar los productos")

            }).finally(()=>{
                setLoading(false)
            })
        }
        
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