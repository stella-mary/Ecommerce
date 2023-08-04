import { useState, useEffect } from 'react';
import './cart/cartDetails/cart.css';
import CartDetails from './cart/cartDetails/cartDetails';
import CartDetails1 from './cart/cartDetails1/cartDetails1';
import OrderSummary from './orderSummary/orderSummary';

// import OrderSummary from '../scenes/orderSummary/orderSummary';
import { navigate, useNavigate } from "react-router-dom";
import { mockDataProduct } from "../data/mockData";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    const [vatAmount, setVatAmount] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

    const navigate = useNavigate();

    let initialTotal = 0;

    const [total, setTotal] = useState(initialTotal);
    useEffect(() => {
        const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
        if (cartItemsFromLocalStorage) {
            setCartItems(JSON.parse(cartItemsFromLocalStorage));
        }
    }, []);
    useEffect(() => {
        let newTotal = 0;
        cartItems.forEach((item) => {
            newTotal += (item.ProductPrice * item.quantity);
        });
        setTotal(newTotal);
    }, [cartItems]);

    const calculateTotalAmount = () => {
        const totalAmount = total + vatAmount;
        setTotalAmount(totalAmount);
    };


    const calculateSubtotal = () => {
        let subtotal = 0;
        cartItems.map((item) => {
            const itemSubtotal = item.quantity * item.ProductPrice;

            subtotal += isNaN(itemSubtotal) ? 0 : itemSubtotal;
        });

        setTotal(subtotal)
    };
    console.log("total in cartPage" + total)

    const TotalAmount = total + vatAmount;


    return (
        <div className='cart'>
            {/* <CartDetails /> */}
            <CartDetails1 cart={cartItems} setCart={setCartItems} total={total} calculateSubtotal={calculateSubtotal} />
            <OrderSummary
                cart={cartItems}
                total={total}
                TotalAmount={TotalAmount}
                vatAmount={vatAmount}
                calculateTotalAmount={calculateTotalAmount}
                calculateVatAmount={() => {
                    let vat = total * 0.01;
                    setVatAmount(vat);
                }}
            />
        </div>
    );
};

export default Cart;

