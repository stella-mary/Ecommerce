import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const OrderSummary = ({ vatAmount, calculateTotalAmount }) => {

    const [cartItems, setCartItems] = useState([]);
    const [itemstotal, setItemstotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
        if (cartItemsFromLocalStorage) {
            setCartItems(JSON.parse(cartItemsFromLocalStorage));
        }
    }, [cartItems]);
    useEffect(() => {
        let newItemsTotal = 0;
        cartItems.forEach((item) => {
            newItemsTotal += item.quantity * item.price;
        });
        setItemstotal(newItemsTotal);

        // Calculate subtotal and totalAmount here
        const newSubtotal = newItemsTotal + vatAmount;
        setSubtotal(newSubtotal);
        setTotalAmount(newSubtotal);
    }, [cartItems, vatAmount]);

    useEffect(() => {
        calculateTotalAmount(totalAmount);
    }, [totalAmount, calculateTotalAmount]);

    const buttonStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2499ef', // Set the desired background color
        color: '#FFFFFF', // Set the desired text color
        padding: '10px', // Set the desired padding
        fontWeight: 600, // Set the desired font weight
        fontSize: '12px', // Set the desired font size
        textAlign: 'center', // Set the desired text alignment
        cursor: 'pointer', // Set the cursor to indicate it's clickable
        marginTop: '30px',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: '5px'
    };



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
                paddingBottom="30px"
            >

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    colors={colors.grey[100]}
                    p="15px"

                >

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="15px">
                        Order Summery
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="10px"
                    paddingLeft="15px"
                    paddingRight="10px"
                >
                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                        Items Total
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$ {itemstotal}</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >
                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                        VATS 1%
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">{vatAmount} </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >

                    <Typography color={colors.greenAccent[100]} variant="h6" font-Size="20px" fontWeight="600" paddingBottom="20px">
                        Sub Total
                    </Typography>

                    <Typography fontWeight="600" fontSize="15px" paddingBottom="20px">
                        $ {subtotal}
                    </Typography>

                </Box>

                <div className="bordertop">&#160;</div>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >

                    <Typography color={colors.greenAccent[100]} variant="h5" fontSize="15px" fontWeight="600" paddingBottom="1px">
                        Total
                    </Typography>
                    <Typography color="#ff316f;" fontWeight="600" fontSize="15px" paddingBottom="1px">$ {totalAmount}</Typography>
                </Box>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: '10px' }}>
                    <input
                        type="text" // Set the desired text field type
                        className="input-field" // Add a class name for the input field
                        style={{
                            borderColor: '#3d454e',
                            padding: '10px',
                            background: '#222b36',
                            borderRadius: '5px',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            width: '200px',
                            outline: 'none'

                        }}
                        placeholder="Apply Coupon" // Optional: Add a placeholder text
                        onFocus={(e) => {
                            e.target.style.color = 'white'; // Change the text color to white when clicked
                        }}
                        onBlur={(e) => {
                            e.target.style.color = '#2f4365'; // Change the text color back to the original color when focus is lost
                        }}
                    />

                    <div style={{
                        padding: '10px',
                        background: '#2499ef',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Apply</div>
                </div>

                <Box>
                    <Typography variant="h6" style={buttonStyles}>
                        <AddShoppingCartIcon style={{ marginRight: '5px' }} />
                        Check Out Now
                    </Typography>
                </Box>


            </Box>

        </Box >


    );
};

export default OrderSummary;

