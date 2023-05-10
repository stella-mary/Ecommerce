import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import CheckOut1Details from './checkout1/checkOut1Details/checkOut1Details';
import { navigate, useNavigate } from "react-router-dom";
import OrderSummary from './checkout1/orderSummary/orderSummary';
import CheckBox from './checkout1/checkbox/checkbox'
import StepperBar from './checkout1/stepperBar/stepperBar';
import { mockDataCart } from "../data/mockData";


const CheckOut1 = () => {

    const [cart, setCart] = useState(mockDataCart);



    const navigate = useNavigate();

    // const initialTotal = cart.map((item) => {
    //     let newTotal = 0;
    //     newTotal += item.ProductPrice * item.quantity
    //     return newTotal;
    // });

    // let initialTotal = 0;
    // cart.map((item) => {
    //     initialTotal += item.ProductPrice * item.quantity
    //     // return newTotal
    // })

    const [total, setTotal] = useState(0);



    const calculateSubtotal = () => {
        let subtotal = 0;
        cart.map((item) => {
            const itemSubtotal = item.quantity * item.ProductPrice;

            subtotal += isNaN(itemSubtotal) ? 0 : itemSubtotal;
        });
        // return subtotal;
        setTotal(subtotal)
    };
    console.log("total in checkout" + total)



    return (
        <div>
            <CheckBox />
            <StepperBar />

            <div className='payment'>
                <CheckOut1Details cart={cart} setCart={setCart} total={total} calculateSubtotal={calculateSubtotal} />
                <div className='payment1'>
                    <OrderSummary total={total} />
                </div>
            </div>
        </div>
    )
}


export default CheckOut1