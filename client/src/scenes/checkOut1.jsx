import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import CheckOut1Details from './checkout1/checkOut1Details/checkOut1Details';
import { navigate, useNavigate } from "react-router-dom";
import OrderSummary from './orderSummary/orderSummary';
import CheckBox from './checkout1/checkbox/checkbox'
import StepperBar from './checkout1/stepperBar/stepperBar';
import { mockDataProduct } from "../data/mockData";
import CheckOut2Details from './checkout1/checkout2Details/checkout2Details'

const CheckOut1 = () => {

    const [cart, setCart] = useState(mockDataProduct);

    const [vatAmount, setVatAmount] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

    const navigate = useNavigate();

    let initialTotal = 0;

    const [total, setTotal] = useState(initialTotal);

    useEffect(() => {
        let newTotal = 0;
        cart.forEach((item) => {
            newTotal += item.ProductPrice * item.quantity;
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
    console.log("total in checkout" + total)

    const calculateVatAmount = () => {
        const vat = total * 0.01;
        setVatAmount(vat);
        console.log("checked" + total)
    };

    useEffect(() => {
        calculateVatAmount();
    }, [total]);

    const calculateTotalAmount = () => {
        const totalAmount = total + vatAmount;
        setTotalAmount(totalAmount);
    };

    return (
        <div>
            <CheckBox />
            <StepperBar />
            {/* <CheckOut2Details /> */}

            <div className='payment'>
                <CheckOut1Details cart={cart} setCart={setCart} total={total} calculateSubtotal={calculateSubtotal} />
                <div className='payment1'>
                    <OrderSummary
                        total={total}
                        vatAmount={vatAmount}
                        calculateTotalAmount={calculateTotalAmount}
                        calculateVatAmount={() => {
                            const vat = total * 0.01;
                            setVatAmount(vat);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}


export default CheckOut1