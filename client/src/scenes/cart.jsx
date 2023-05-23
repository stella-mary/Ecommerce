import { useState, useEffect } from 'react'
import './cart/cartDetails/cart.css';
import CartDetails from './cart/cartDetails/cartDetails';
import OrderSummary from '../scenes/orderSummary/orderSummary'
import { navigate, useNavigate } from "react-router-dom";

const Cart = () => {


    const navigate = useNavigate();

    return (

        <div className='cart'>
            <CartDetails />
            <OrderSummary firstTitleAmount="230" secondTitleAmount="15" thirdTitleAmount="50" fourthTitleAmount="285" />
        </div >
    )
}


export default Cart