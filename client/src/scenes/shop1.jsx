import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import Shop1 from './shop1/shop1/shop1';
import { navigate, useNavigate } from "react-router-dom";
import CheckBox1 from './shop1/checkbox1/checkbox1';
import Shop1Page from './shop1/shop1Page/shop1Page';

const Shop = () => {

    const navigate = useNavigate();

    return (
        <div>
            <CheckBox1 />

            <div className='product'>
                <Shop1 />
                {/* <Shop1Page /> */}
            </div>
        </div>
    )
}


export default Shop