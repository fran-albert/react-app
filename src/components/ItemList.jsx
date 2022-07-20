import React from 'react'
import '../App'
import Item from './Item'

const ItemList = ({data = []}) => {
  return (
    <div className='productosPrueba'>
    {data.map(producto => <Item key={producto.id} info={producto} />)}
    </div>
  )
  
}

export default ItemList;