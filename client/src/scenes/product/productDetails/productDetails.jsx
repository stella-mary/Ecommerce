import { Box, Typography, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { mockDataProduct } from "../../../data/mockData";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import shoe from '../../Img/shoe.jpg'
import { tokens } from "../../../theme";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductDetails() {

    const navigate = useNavigate();

    const handleAddToCart = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const nextId = existingCartItems.length > 0 ? existingCartItems[existingCartItems.length - 1].id + 1 : 1;

        const itemToAdd = {
            id: nextId,
            size: selectedSize,
            quantity: selectedQuantity,
            title: 'Nike Pro Max 270',
            price: '350',
            image: shoe,
        };

        const updatedCartItems = [...existingCartItems, itemToAdd];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        localStorage.setItem('selectedQuantity', selectedQuantity); // Store the selected size in local storage
        localStorage.setItem('selectedSize', selectedSize); // Store the selected size in local storage
        navigate('/cart'); // Navigate to the CartDetails component
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [selectedSize, setSelectedSize] = useState('');

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    console.log("selectedQuantity" + selectedQuantity)


    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const [cart, setCart] = useState(mockDataProduct);




    return (
        <div>

            <Box

                display="flex"
                width="97%"
                alignItems="top"
                gap="1%"
                borderRadius="10px"
                paddingLeft="1%"
                paddingTop='1%'
                paddingRight='1%'
                m="20px"
                backgroundColor={colors.primary[400]}
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
                        width: "44%",
                        marginLeft: "10px",
                        alignItems: "top",
                    }}
                >
                    <Typography backgroundColor="#27ce88" padding="5px" width="25%" borderRadius="10px" textAlign="center">In Stock</Typography>
                    <Typography variant="h5" color="#8ca3ba" marginTop="20px">NIKE</Typography>
                    <Typography variant="h3" marginTop="10px"><b>Air Jordan 270</b></Typography>
                    <Typography variant="h3" marginTop="10px" color="#2499ef">$350</Typography>


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

                            <option style={{ color: 'black' }} value="M">M</option>
                            <option style={{ color: 'black' }} value="S">S</option>
                            <option style={{ color: 'black' }} value="L">L</option>
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
                            {/* {cart.slice(0, 1).map((item) => (
                                <div key={item.id}> */}

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
                                        setSelectedQuantity(selectedQuantity - 1)
                                    }}
                                >
                                    -
                                </button>
                                <span style={{ flex: 1, textAlign: 'center', color: 'white' }}>{selectedQuantity}</span>
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
                                        setSelectedQuantity(selectedQuantity + 1)
                                    }}
                                >
                                    +
                                </button>

                            </div>
                            {/* </div>
                            ))
                            } */}

                        </div>
                    </div>
                    <Typography variant="h6" marginTop="20px">
                        <b>
                            <span className="color21">Available: 12</span>
                        </b>
                    </Typography>


                    <Box
                        display="flex"
                        justifyContent="-moz-initial"
                        marginTop="40px"
                        gap="20px"

                    >
                        <Typography fontSize="10px" >
                            <span class="bgcolor6" onClick={handleAddToCart}>
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
        </div >

    );
}

