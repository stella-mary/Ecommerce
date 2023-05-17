import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataProduct } from "../../../data/mockData";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';



const Shop1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isHovered, setIsHovered] = useState(false);

    const divStyle = {
        marginRight: '15px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '50%',
        color: isHovered ? '#595959' : '#595959',
        backgroundColor: isHovered ? '#455a79' : '#171c24',
        cursor: 'pointer',
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


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
                        gridTemplateRows="1fr 1fr"
                        borderRadius="10px"
                        backgroundColor={colors.primary[400]}
                        key={item.id}
                        width="100%"
                    >
                        <Box
                            width="100%"
                            height="100%"
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
                            flexDirection="column"
                            gap="10px"
                        >

                            <Box
                                display="flex"
                                justifyContent="space-between"
                                flexDirection="row"
                                alignItems="center"
                                marginLeft="10px"
                                marginRight="10px"
                                marginBottom="0px"
                                marginTop="10px"
                            >
                                <Typography variant="h3" fontWeight="400" fontSize="13px" >
                                    {item.ProductName}
                                    <br />
                                    <span className="color"><b>{item.ProductContent}</b></span>
                                </Typography>
                                <Box display="flex" gap="10px">
                                    <Stack spacing={1}>
                                        <Rating name="size-medium" defaultValue={1} max={1} />
                                    </Stack>
                                    <span className="color"><b>{item.ReviewRating}</b></span>

                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                flexDirection="row"
                                marginLeft="10px"
                                marginRight="10px"
                                marginBottom="10px"
                                marginTop="0px"
                            >
                                <Typography variant="h3" fontWeight="400" fontSize="13px" color={colors.greenAccent[100]}>
                                    <span className="bgColor9"><b>$ {item.ProductPrice}</b></span>
                                </Typography>
                                <Box display="flex" gap="2px" alignItems="center">
                                    <div
                                        style={divStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <FavoriteIcon />
                                    </div>
                                    <div style={{ fontSize: '20px', paddingLeft: '10px', paddingRight: "10px", paddingTop: '5px', paddingBottom: '5px', borderRadius: '50%', backgroundColor: '#2499ef', color: 'white', textAlign: 'center', cursor: 'pointer' }}>+</div>
                                </Box>

                            </Box>
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