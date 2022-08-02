import React from 'react';
import {Badge} from '@mui/material'
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const {totalProducts} = useCartContext()
    return (
        <div className='img-shop'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"/>
            <Badge badgeContent= {totalProducts()} color="secondary">
            </Badge>
        </div>
    )
}

export default CartWidget;