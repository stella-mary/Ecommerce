import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataProduct } from "../../../data/mockData";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Shop1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const [cart, setCart] = useState(mockDataProduct);

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

            <Box
                gridColumn="span 8"
                gridRow="span 2"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr"
                gap="20px"
            // width="100px"
            >

                {cart.map((item) => (

                    < Box
                        marginBottom="15px"
                        display="grid"
                        gridTemplateRows="2fr 1fr"
                        borderRadius="20px"
                        backgroundColor={colors.primary[400]}
                        key={item.id}
                    >
                        {/* <Box
                            width="100%"
                            height="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            style={{ backgroundImage: `url(${item.ProductImage})`, backgroundSize: 'cover' }}
                        /> */}

                        <Box
                            width="100%"
                            // height="100%"
                            display="flex"
                            justifyContent="center"
                            borderRadius='15px 15px 0px 0px'
                            // alignItems="center"

                            style={{
                                backgroundColor: 'white', // Set the background color to white
                                backgroundImage: `url(${item.ProductImage})`, // Set the image URL
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                            }}
                        />


                        <Box>
                            <div className="container">
                                <div className="circle circle-left" style={{ backgroundColor: "#011e3d" }}>

                                    <div className="circle circle-right" style={{ backgroundColor: "#ff316f" }}>

                                    </div>
                                </div>
                            </div>

                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="10px" fontSize="13px" marginLeft="20px" color={colors.greenAccent[100]}>
                                    {item.ProductName}
                                    <br />
                                    <br />
                                    <span className="color"><b>{item.ProductPrice}</b></span>
                                    {item.ProductDiscount}
                                    {item.ProductOffer}
                                </Typography>


                                {item.quantity >= 1 ? (
                                    // <Box variant="h3" fontWeight="400" fontSize="15px" color={colors.grey[100]} marginTop="10px">
                                    <Box variant="h3" fontWeight="400"
                                        fontSize="15px"
                                        color={colors.grey[100]}
                                        border="solid 2px #2f4365"
                                        display="flex"
                                        flexDirection="row"
                                        borderRadius="10px"
                                        justifyContent="space-between"
                                        marginTop="1px"
                                        marginRight="5px"
                                        textAlign="left"
                                        width="100px"
                                        height="40px"
                                        padding="5px"
                                    >
                                        <div className="bgColor10" onClick={() => decrease(item.id)}>-</div>
                                        <span className="space" />
                                        {item.quantity}
                                        <span className="space" />
                                        <div onClick={() => increase(item.id)}>+</div>

                                    </Box>
                                ) : (
                                    <Box variant="h3" fontWeight="400"
                                        fontSize="25px"
                                        color={colors.grey[100]}
                                        borderRadius="10px"
                                        marginTop="1px"
                                        marginRight="15px"
                                        textAlign="right"
                                        cursor="pointer"
                                        padding="5px"
                                    >
                                        <button className="bgColor25" onClick={() => increase(item.id)}>+</button>
                                    </Box>
                                )}


                            </Box>
                        </Box>
                    </Box>
                ))
                }

            </Box >
            <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pagination count={4} size="large" />
            </Stack>

        </Box >

    );
};

export default Shop1;