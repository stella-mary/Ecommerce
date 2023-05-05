import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import CheckOut1Details from './checkout1/checkOut1Details/checkOut1Details';
import { navigate, useNavigate } from "react-router-dom";
import OrderSummary from './checkout1/orderSummary/orderSummary';
import CheckBox from './checkout1/checkbox/checkbox'
import StepperBar from './checkout1/stepperBar/stepperBar';

const CheckOut1 = () => {

    const navigate = useNavigate();

    return (
        <div>
            <CheckBox />
            <StepperBar />

            <div className='payment'>
                <CheckOut1Details />
                <div className='payment1'>
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}


export default CheckOut1