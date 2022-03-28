import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    

    return (
        
        <section className='render-prod'>
                {items.map(item => {
                    return(    
                        <Item key={item.id} item={item}/>
                    )
                    })
                }
        </section>
    )
}

export default ItemList