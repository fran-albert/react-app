import React from 'react'
import { useCartContext } from '../context/CartContext';
import { Button } from '@mui/material';

const ItemCart = ({product}) => {
    const {deleteProduct} = useCartContext();
  return (
    <div>
        <img src={product.image} alt={product.title} />
        <div>
            <p>Título: {product.title}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio Unitario: $ {product.price}</p>
            <p>SubTotal: $ {product.cantidad * product.price}</p>
            <Button onClick={() => deleteProduct(product.id)}>Eliminar</Button>
        </div>
    </div>
  )
}
export default ItemCart;