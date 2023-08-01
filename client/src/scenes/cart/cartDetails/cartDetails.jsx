// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../../theme";
// import React, { useState } from 'react';
// import { mockDataProduct } from "../../../data/mockData";

// const CartDetails = () => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);

//     const [cart, setCart] = useState(mockDataProduct);

//     const increase = (id) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//         );
//     };

//     const decrease = (id) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//             )
//         );
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.id === id && item.quantity === 1 ? { ...item, show: true } : item
//             )
//         );
//     };



//     return (
//         <Box m="20px">

//             {cart.slice(0, 3).map((item) => (
//                 <div key={item.id}>
//                     <Box
//                         display="flex"
//                         justifyContent="space-between"
//                         marginBottom="15px"
//                         borderRadius="10px"
//                         padding="25px"
//                         backgroundColor={colors.primary[400]}
//                         key={item.id}
//                     >
//                         <Box display="flex" alignItems="center" gap="10px">

//                             {/* <Box
//                             width="100%"
//                             // height="100%"
//                             display="flex"
//                             justifyContent="center"
//                             borderRadius='15px 15px 0px 0px'
//                             // alignItems="center"

//                             style={{
//                                 backgroundColor: 'white', // Set the background color to white
//                                 backgroundImage: `url(${item.ProductImage})`, // Set the image URL
//                                 backgroundPosition: 'center',
//                                 backgroundRepeat: 'no-repeat',
//                                 backgroundSize: '50%',
//                             }}
//                         /> */}
//                             <img src={item.ProductImage} width={60} height={60} style={{ borderRadius: '15%', backgroundColor: 'white' }} />

//                             <div className='productDetails'>
//                                 <Typography variant="h3" fontWeight="400" fontSize="13px" color={colors.greenAccent[100]} marginBottom="5px">{item.ProductName}</Typography>
//                                 <Typography variant="h3" fontWeight="400" fontSize="13px" color={colors.greenAccent[100]} marginBottom="5px">{item.ProductPrice}</Typography>
//                                 <Typography variant="h3" fontWeight="400" fontSize="13px" color="#455978" marginBottom="5px"><b>{item.ProductStock}</b></Typography>
//                             </div>
//                         </Box>
//                         {item.quantity >= 1 ? (
//                             <Box variant="h3" fontWeight="400" fontSize="15px" color={colors.grey[100]} marginTop="15px">
//                                 <button className="bgColor" onClick={() => increase(item.id)}>+</button>
//                                 <span className="space" />
//                                 {item.quantity}
//                                 <span className="space" />
//                                 <button className="bgColor" onClick={() => decrease(item.id)}>-</button>
//                             </Box>
//                         ) : (
//                             <Box marginTop="15px">
//                                 <button className="button5" onClick={() => increase(item.id)}>Add to cart</button>
//                             </Box>
//                         )}

//                     </Box>
//                 </div>
//             ))
//             }

//         </Box >
//         // </Box >
//     );
// };

// export default CartDetails;


import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { mockDataProduct } from "../../../data/mockData";
import shoe from '../../Img/shoe.jpg'



const CartDetails = ({ shoeImage, productTitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
        if (cartItemsFromLocalStorage) {
            setCartItems(JSON.parse(cartItemsFromLocalStorage));
        }
    }, []);

    const selectedSize = localStorage.getItem('selectedSize'); // Retrieve the selected size from local storage


    return (
        <Box m="20px">
            {cartItems.map((cartItem) => (
                <div key={cartItem.id}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        marginBottom="15px"
                        borderRadius="10px"
                        padding="25px"
                        backgroundColor={colors.primary[400]}
                        key={cartItem.id}
                    >
                        <div className='productDetails'>
                            <Typography variant="h3" fontWeight="400" fontSize="13px" color={colors.greenAccent[100]} marginBottom="5px">

                                Size: {cartItem.size}<br />
                                Quantity: {cartItem.quantity}
                            </Typography>
                        </div>
                    </Box>
                </div>
            ))}
        </Box>
    )
}


export default CartDetails;
