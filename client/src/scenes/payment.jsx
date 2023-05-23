import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import PaymentMethod from './payment/paymentMethod/paymentMethod';
import PaymentBill from './payment/paymentBill/paymentBill'
import PaymentSummary from './payment/paymentSummary/paymentSummary'
import { navigate, useNavigate } from "react-router-dom";
import { mockDataProduct } from "../data/mockData";
import StepperBar from './payment/stepperBar/stepperBar';
import OrderSummary from '../scenes/orderSummary/orderSummary';

const Payment = () => {

    const [cart, setCart] = useState(mockDataProduct);

    const [vatAmount, setVatAmount] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

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



    const navigate = useNavigate();

    return (
        <div>
            <StepperBar />
            <div className='payment'>

                <PaymentMethod />
                <div className='payment1'>
                    <PaymentBill />
                    <OrderSummary
                        firstTitleAmount="230"
                        secondTitleAmount="0"
                        TotalAmount="230"
                        fourthTitleAmount="230"
                    />
                </div>
            </div >
        </div>
    )
}


export default Payment