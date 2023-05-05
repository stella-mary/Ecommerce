import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import CheckOut from './checkout2/checkForm/checkForm';

import { navigate, useNavigate } from "react-router-dom";
import OrderSummary from './checkout2/orderSummary/orderSummary';

const CheckOut2 = () => {

    const navigate = useNavigate();

    return (


        <div className='payment'>
            <CheckOut />
            <div className='payment1'>
                <OrderSummary />
            </div>
        </div>
    )
}


export default CheckOut2