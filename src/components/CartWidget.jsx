import React from 'react';
import {Badge} from '@mui/material'

const CartWidget = () => {
    return (
        <div className='img-shop'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"/>
            <Badge badgeContent= {2} color="secondary">
            </Badge>
        </div>
    )
}

export default CartWidget;