import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import CheckOut from './checkout2/checkForm/checkForm';

import { navigate, useNavigate } from "react-router-dom";
import OrderSummary from './checkout2/orderSummary/orderSummary';

const CheckOut2 = () => {

    const [firstTitleAmount, setFirstTitleAmount] = useState(0);
    const [secondTitleAmount, setSecondTitleAmount] = useState(0);
    const [thirdTitleAmount, setThirdTitleAmount] = useState(0);
    const [fourthTitleAmount, setFourthTitleAmount] = useState(0);

    const navigate = useNavigate();

    return (


        <div className='payment'>
            <CheckOut />
            <div className='payment1'>
                <OrderSummary firstTitleAmount={firstTitleAmount} SecondTitleAmount={secondTitleAmount} ThirdTitleAmount={thirdTitleAmount} fourthTitleAmount={fourthTitleAmount} />
            </div>
        </div>
    )
}


export default CheckOut2