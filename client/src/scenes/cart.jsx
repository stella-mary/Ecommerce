import { useState, useEffect } from 'react';
import './cart/cartDetails/cart.css';
import CartDetails from './cart/cartDetails/cartDetails';
import OrderSummary from '../scenes/orderSummary/orderSummary';
import { navigate, useNavigate } from "react-router-dom";
import { mockDataProduct } from "../data/mockData";

const Cart = () => {

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
        <div className='cart'>
            <CartDetails />
            <OrderSummary
                firstTitleAmount="230"
                secondTitleAmount="15"
                TotalAmount="50"
                fourthTitleAmount="285"

            />
        </div>
    );
};

export default Cart;
