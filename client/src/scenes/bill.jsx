import { useState, useEffect } from 'react'
import './cart/cartDetails/cart.css';
import BillAddress from './bill/billAddress/billAddress';
import OrderSummary from '../scenes/orderSummary/orderSummary';
import { mockDataProduct } from "../data/mockData";
import { navigate, useNavigate } from "react-router-dom";
import StepperBar from './payment/stepperBar/stepperBar';

const Bill = () => {

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
        <div>
            <StepperBar />
            <div className='cart'>
                <BillAddress />
                <OrderSummary
                    firstTitleAmount="230"
                    secondTitleAmount="0"
                    TotalAmount="230"
                    fourthTitleAmount="230"
                />
            </div >
        </div>
    )
}


export default Bill