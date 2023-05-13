import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import ProductDescription from './product/productDescription/productDescription';
import ProductDetails from './product/productDetails/productDetails'
import { navigate, useNavigate } from "react-router-dom";
import CheckBox from './product/checkbox/checkbox';
import ProductReview from './product/productReview/productReview'

const Product = () => {

    const navigate = useNavigate();

    return (
        <div>
            <CheckBox />
            <div className='product'>
                <ProductDetails />
                <ProductReview />
                {/* <ProductDescription /> */}
            </div>
        </div>
    )
}


export default Product