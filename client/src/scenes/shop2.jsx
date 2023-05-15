import { useState, useEffect } from 'react'
import './cart/cartDetails/cart.css';
import Shop2Details from './shop2/shop2Details/shop2Details';
import Shop2Menu from './shop2/shop2Menu/shop2Menu'
import { navigate, useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();

    return (

        <div className='shop2'>
            <Shop2Menu />
            <Shop2Details />
        </div >
    )
}


export default Cart