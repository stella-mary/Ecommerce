import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataCart } from "../../../data/mockData";

const CartDetails = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [cart, setCart] = useState(mockDataCart);

    const increase = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrease = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity === 1 ? { ...item, show: true } : item
            )
        );
    };



    return (
        <Box m="20px">

            {/* <Box
                gridColumn="span 4"
                gridRow="span 2"
            > */}

            {cart.map((item) => (
                <div key={item.id}>

                    < Box
                        display="flex"
                        justifyContent="space-between"
                        marginBottom="15px"
                        borderRadius="10px"
                        padding="25px"
                        backgroundColor={colors.primary[400]}
                        key={item.id}
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                                <div className="productDetails1">
                                    <img src={item.ProductImage} width={50} height={60} style={{ borderRadius: '10%' }} />


                                    <div className='productDetails'>
                                        <Typography variant="h3" fontWeight="400" fontSize="13px" color={colors.greenAccent[100]} marginBottom="5px">{item.ProductName}</Typography>
                                        <Typography variant="h3" fontWeight="400" fontSize="13px" color={colors.greenAccent[100]} marginBottom="5px">{item.ProductPrice}</Typography>
                                        <Typography variant="h3" fontWeight="400" fontSize="13px" color="#455978" marginBottom="5px">{item.ProductStock}</Typography>
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                        {item.quantity >= 1 ? (
                            <Box variant="h3" fontWeight="400" fontSize="15px" color={colors.grey[100]} marginTop="15px">
                                <button className="bgColor" onClick={() => increase(item.id)}>+</button>
                                <span className="space" />
                                {item.quantity}
                                <span className="space" />
                                <button className="bgColor" onClick={() => decrease(item.id)}>-</button>
                            </Box>
                        ) : (
                            <Box>
                                <button className="button5" onClick={() => increase(item.id)}>Add to cart</button>
                            </Box>
                        )}

                    </Box>
                </div>
            ))
            }

        </Box >
        // </Box >
    );
};

export default CartDetails;