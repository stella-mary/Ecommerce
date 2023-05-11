import { Box, Typography } from "@mui/material";

import React, { useState } from 'react';
import shoe from '../../Img/shoe.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductDetails() {

    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                width: "97%",
                alignItems: "top",
                gap: "1%",
                borderRadius: "10px",
                padding: "1%",
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
                    // border: "solid 1px red",
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    marginLeft: "10px",
                    justifyContent: "center",
                }}
            >
                <Typography><span class="bgcolor5">In Stock</span></Typography>
                <Typography variant="h5" color="#8ca3ba" marginTop="20px">NIKE</Typography>
                <Typography variant="h3" marginTop="10px"><b>Air Jordan 270</b></Typography>
                <Typography variant="h3" marginTop="30px" color="#2499ef">$350</Typography>
                <Typography variant="h5" marginTop="20px"
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

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        variant: "h3",
                        fontWeight: 400,
                        fontSize: "15px",
                        marginTop: "15px",
                        border: "2px solid #2f4264",
                        borderRadius: "6px",
                        padding: "5px",
                        width: '100px'
                    }}
                >
                    <button
                        style={{
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            marginRight: "5px",
                            fontSize: '15px',
                            color: 'white'
                        }}
                    // onClick={() => {
                    //     if (item.quantity > 0) {
                    //         decrease(item.id);
                    //     }
                    // }}
                    >
                        -
                    </button>
                    <span style={{ flex: 1, textAlign: "center" }}>0</span>
                    <button
                        style={{
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            marginLeft: "5px",
                            fontSize: '15px',
                            color: 'white'
                        }}
                    // onClick={() => increase(item.id)}
                    >
                        +
                    </button>
                </div>

                <Typography variant="h5" marginTop="20px">Quantity:</Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    marginTop="20px"
                    width="50%"
                >
                    <Typography><span class="bgcolor6">Add to cart</span></Typography>
                    <Typography><span class="bgcolor5">Buy Now</span></Typography>
                </Box>
            </Box>
        </Box >
    );
}

