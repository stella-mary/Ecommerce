import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataProduct } from "../../../data/mockData";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';




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

        <Box m="20px" width="100%">

            <Box
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
                        width="100%"
                    >
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
                                backgroundSize: '50%',
                            }}
                        />

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                        >
                            <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="10px" fontSize="13px" marginLeft="20px" color={colors.greenAccent[100]}>
                                {item.ProductName}
                                <br />
                                <span className="color"><b>{item.ProductContent}</b></span>
                                <br />
                                <br />
                            </Typography>
                            <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="10px" fontSize="13px" marginLeft="20px" color={colors.greenAccent[100]}>
                                <Stack spacing={1}>
                                    <Rating name="size-medium" defaultValue={1} max={1} />
                                </Stack>
                                <span className="color"><b>{item.ReviewRating}</b></span>
                                <br /><br />
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                        >
                            <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="10px" fontSize="13px" marginLeft="20px" color={colors.greenAccent[100]}>

                                <span className="bgColor9"><b>$ {item.ProductPrice}</b></span>
                            </Typography>

                        </Box>

                    </Box>
                ))
                }

            </Box >
            <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pagination
                    count={4}
                    size="small"
                    sx={{
                        "& .Mui-selected": {
                            backgroundColor: "transparent", // Set the background color for the selected page
                            outline: "2px solid #2499ef",
                            "&:hover": {
                                outline: "2px solid #2499ef", // Set the hover outline color
                            },
                        },
                    }}
                />
            </Stack>

        </Box >

    );
};

export default Shop1;