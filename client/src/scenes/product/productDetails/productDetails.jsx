import { Box, Typography, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { mockDataProduct } from "../../../data/mockData";

import React, { useState } from 'react';
import shoe from '../../Img/shoe.jpg'
import { tokens } from "../../../theme";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductDetails() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const [cart, setCart] = useState(mockDataProduct);

    const increase = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);


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
        <div>

            <Box
                sx={{
                    display: "flex",
                    width: "97%",
                    alignItems: "top",
                    gap: "1%",
                    borderRadius: "10px",
                    paddingLeft: "1%",
                    paddingTop: '1%',
                    paddingRight: '1%',
                    m: "20px",
                    backgroundColor: "#222b36",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        width: "10%",
                    }}
                >
                    <img src={shoe} alt="Shoe 1" />
                    <img src={shoe} alt="Shoe 2" />
                    <img src={shoe} alt="Shoe 3" />
                </Box>

                <Box
                    sx={{
                        width: "44%",
                        display: "flex",
                        objectFit: "cover",
                        alignItems: "top",
                    }}
                >
                    <div className="product-details" style={{ position: 'relative' }}>
                        <div className="product-image-container">
                            <img src={shoe} alt="Shoe 4" width="100%" />
                            <div className="heart-icon">
                                <FavoriteBorderIcon sx={{ fontSize: "20px", color: "white", textAlign: 'center' }} />

                            </div>
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        // border: "solid 1px green",
                        width: "44%",
                        marginLeft: "10px",
                        alignItems: "top",
                        // justifyContent: "center",

                    }}
                >
                    <Typography backgroundColor="#27ce88" padding="5px" width="25%" borderRadius="10px" textAlign="center">In Stock</Typography>
                    <Typography variant="h5" color="#8ca3ba" marginTop="20px">NIKE</Typography>
                    <Typography variant="h3" marginTop="10px"><b>Air Jordan 270</b></Typography>
                    <Typography variant="h3" marginTop="10px" color="#2499ef">$350</Typography>
                    <Typography variant="h6" marginTop="10px"
                        display="flex"
                        flexDirection="space-between"
                    ><b>Colors:</b><span className="space" />
                        <div class="circle" /> <span class="space1" /><div class="circle1" /><span class="space1" />
                        <div class="circle2" /> <span class="space1" />
                        <div class="circle4" />
                    </Typography>


                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '10px' }}>
                        <label htmlFor="sizeSelect" style={{ marginRight: '10px' }}>
                            <b>Select Size:</b>
                        </label>
                        <select
                            id="sizeSelect"
                            value={selectedSize}
                            onChange={handleSizeChange}
                            style={{
                                flex: '1',
                                maxWidth: '70px',
                                color: 'white',
                                backgroundColor: "transparent",
                                padding: '10px',
                                borderColor: "#3d454e", // Change the border color to #3d454e
                                borderWidth: '2px', // Specify the border width
                                borderStyle: 'solid' // Specify the border style
                            }}
                        >

                            <option style={{ color: 'black' }} value="40">40</option>
                            <option style={{ color: 'black' }} value="41">41</option>
                            <option style={{ color: 'black' }} value="42">42</option>
                        </select>

                        <style>{`
    select#sizeSelect option:checked {
        border-color: #3d454e;
    }
`}</style>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                        <Typography variant="h6" marginTop="20px"><b>Quantity:</b></Typography>

                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    variant: 'h3',
                                    fontWeight: 400,
                                    fontSize: '15px',
                                    marginTop: '15px',
                                    border: '2px solid #2f4264',
                                    borderRadius: '6px',
                                    padding: '5px',
                                    width: '100px',
                                }}
                            >
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        marginRight: '5px',
                                        fontSize: '15px',
                                        color: 'white',
                                    }}
                                    onClick={() => {
                                        if (totalQuantity > 0) {
                                            setCart((prevCart) =>
                                                prevCart.map((item) =>
                                                    item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
                                                )
                                            );
                                        }
                                    }}
                                >
                                    -
                                </button>
                                <span style={{ flex: 1, textAlign: 'center', color: 'white' }}>{totalQuantity}</span>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        marginLeft: '5px',
                                        fontSize: '15px',
                                        color: 'white',
                                    }}
                                    onClick={() => {
                                        setCart((prevCart) =>
                                            prevCart.map((item) => ({ ...item, quantity: item.quantity + 1 }))
                                        );
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <Typography variant="h6" marginTop="20px">
                            <b>
                                <span className="color21">Available: 12</span>
                            </b>
                        </Typography>
                    </div>

                    <Box
                        display="flex"
                        justifyContent="-moz-initial"
                        marginTop="40px"
                        gap="20px"

                    >
                        <Typography fontSize="10px" >
                            <span class="bgcolor6" >
                                <b>Add to cart</b>
                            </span>
                        </Typography>
                        <Typography fontSize="10px" >
                            <span class="bgcolor5">
                                <b>Buy Now</b>
                            </span>
                        </Typography>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="-moz-initial"
                        marginTop="30px"
                        gap="10px"
                    >

                        <div className="social-icon">
                            <span><FontAwesomeIcon icon={faFacebookF} style={{ color: '#455a79' }} /></span>
                        </div>
                        <div className="social-icon">
                            <span><Instagram /></span>
                        </div>
                        <div className="social-icon">
                            <span><Twitter /></span>
                        </div>

                    </Box>
                </Box>
            </Box >
        </div>
    );
}

