import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import PaymentComplete1 from './paymentComplete1/paymentComplete1/paymentComplete1';
import { navigate, useNavigate } from "react-router-dom";

const Product = () => {

    const navigate = useNavigate();

    return (
        <div>
            <PaymentComplete1 />
        </div>
    )
}


export default Product