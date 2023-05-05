import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import PaymentComplete2 from './paymentComplete2/paymentComplete2/paymentComplete2';
import { navigate, useNavigate } from "react-router-dom";

const Product = () => {

    const navigate = useNavigate();

    return (
        <div>
            <PaymentComplete2 />
        </div>
    )
}


export default Product