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
                // gridColumn="span 8"
                // gridRow="span 2"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr"
                gap="20px"


            >

                {cart.map((item) => (

                    < Box
                        marginBottom="15px"
                        display="grid"
                        gridTemplateRows="2fr 1fr"
                        borderRadius="10px"
                        backgroundColor={colors.primary[400]}

                        key={item.id}
                    >
                        <Box
                            width="100%"
                            height="80%"
                            display="flex"
                            justifyContent="center"
                            borderRadius='15px 15px 0px 0px'
                            alignItems="center"
                            style={{
                                backgroundColor: 'white', // Set the background color to white
                                backgroundImage: `url(${item.ProductImage})`, // Set the image URL
                                backgroundSize: '50%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                            marginTop="-10px"
                        >
                            <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="10px" fontSize="13px" marginLeft="20px" color={colors.greenAccent[100]}>
                                {item.ProductName}
                                <br />
                                <span className="color"><b>{item.ProductContent}</b></span>
                                <br />
                                <br />
                                {item.ReviewRating}
                                <br /><br />
                                <span className="bgColor9"><b>$ {item.ProductPrice}</b></span>
                            </Typography>

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