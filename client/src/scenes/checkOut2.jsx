import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import CheckOut from './checkout2/checkForm/checkForm';
import OrderSummary from '../scenes/orderSummary/orderSummary';
import { navigate, useNavigate } from "react-router-dom";
import { mockDataProduct } from "../data/mockData";

const CheckOut2 = () => {

    const [cart, setCart] = useState(mockDataProduct);

    const [vatAmount, setVatAmount] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

    const navigate = useNavigate();

    let initialTotal = 0;

    const [total, setTotal] = useState(initialTotal);

    useEffect(() => {
        let newTotal = 0;
        cart.forEach((item) => {
            newTotal += (item.ProductPrice * item.quantity);
        });
        setTotal(newTotal);
    }, [cart]);

    const calculateSubtotal = () => {
        let subtotal = 0;
        cart.map((item) => {
            const itemSubtotal = item.quantity * item.ProductPrice;

            subtotal += isNaN(itemSubtotal) ? 0 : itemSubtotal;
        });

        setTotal(subtotal)
    };
    console.log("total in cartPage" + total)

    const TotalAmount = total + vatAmount;

    return (

        <div className='payment'>
            <CheckOut />
            <div className='payment1'>
                <OrderSummary
                    firstTitleAmount="215"
                    secondTitleAmount="15"
                    TotalAmount="50"
                    fourthTitleAmount="285"
                />
            </div>
        </div>
    )
}


export default CheckOut2