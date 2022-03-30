import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner'
import { db } from '../firebase.js'
import { collection, getDoc, doc, query, where, getDocs } from 'firebase/firestore'



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
        toast.info("cargando detalle")
        const productosCollection = collection(db, "productos")
        const filtro = query(productosCollection,where("id","==",Number(itemId)))
        const pedido = getDocs(filtro)

        pedido.then((resultado)=>{
            setItem(resultado.docs[0].data())

        }).catch(()=>{
            toast.error("Error al cargar los productos")

        }).finally(()=>{
            setLoading(false)
        })
    },[itemId])

    if (loading){
        return (
            <div className='d-flex justify-content-center align-content-center mt-5'>
                <Spinner/>
            </div>
        ) 
    }else{
        return (
            <div className='d-flex justify-content-center my-4'>
                <ItemDetail item={item}/>
            </div>
        )
    }

}

export default ItemDetailContainer