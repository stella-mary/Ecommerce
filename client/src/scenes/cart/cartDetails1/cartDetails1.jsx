
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { mockDataProduct } from "../../../data/mockData";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#333c46',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: '#222b36', // Set the desired background color for all rows

    '&:last-child td, &:last-child th': {
        border: 'none',
        paddingBottom: '20px',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& .icon-wrapper': {
        display: 'inline-block',
        borderRadius: '50%',
        padding: '8px',
        transition: 'background-color 0.3s',
    },
    '& .icon-wrapper:hover': {
        backgroundColor: '#333c46',
    },
}));


export default function CustomizedTables({ cart, setCart, total, calculateSubtotal }) {

    console.log("checked details" + total)

    const [cartItems, setCartItems] = useState([]);

    var totalCartPrice = 0;

    // const [cart, setCart] = useState(mockDataCart);

    const increase = (id) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );

        // Get the updated cart items from the state after increasing the quantity
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        // Save the updated cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };


    const decrease = (id) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1, show: item.quantity === 2 }
                    : item
            )
        );

        // Get the updated cart items from the state after decreasing the quantity
        const updatedCartItems = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1, show: item.quantity === 2 }
                : item
        );

        // Save the updated cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };




    useEffect(() => {
        const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
        if (cartItemsFromLocalStorage) {
            setCartItems(JSON.parse(cartItemsFromLocalStorage));
        }
    }, []);

    const deleteItem = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));

        // Get the updated cart items from the state after removing the item
        const updatedCartItems = cartItems.filter((item) => item.id !== id);

        // Save the updated cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };




    return (
        <div className='checkOut'>

            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>

                {/* <div align="left" style={{ backgroundColor: '#222b36', padding: '15px' }}>Cart <span className='color'>(3 item)</span></div> */}


                <Table sx={{ minWidth: 500 }} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead >
                    <TableBody>
                        {cartItems.map((cartItem) => (
                            // {cart.map((item, idx) => (

                            // totalCartPrice += item.ProductPrice * item.quantity;

                            // <tr key={idx} >
                            <StyledTableRow key={cartItem.id} style={{ marginBottom: '20px' }}>
                                <StyledTableCell>
                                    <div className="product-container">
                                        <img src={cartItem.image} className="product-image" style={{ borderRadius: '10%', backgroundColor: 'white' }} />
                                        <div>
                                            <div>{cartItem.title}</div>
                                            <div><span className="color21">Quantity:</span> {cartItem.quantity}</div>
                                            <div><span className="color21">Size:</span> {cartItem.size}</div>
                                        </div>
                                    </div>
                                </StyledTableCell>

                                <StyledTableCell>
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
                                            onClick={() => {
                                                if (cartItem.quantity > 0) {
                                                    decrease(cartItem.id);
                                                }
                                            }}
                                        >
                                            -
                                        </button>
                                        <span style={{ flex: 1, textAlign: "center" }}>{cartItem.quantity}</span>
                                        <button
                                            style={{
                                                border: "none",
                                                backgroundColor: "transparent",
                                                cursor: "pointer",
                                                marginLeft: "5px",
                                                fontSize: '15px',
                                                color: 'white'
                                            }}
                                            onClick={() => increase(cartItem.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="color22">Available: 12</span>
                                </StyledTableCell>

                                <StyledTableCell align="left" style={{ fontSize: '12px' }}>$ {cartItem.price}</StyledTableCell>
                                {/* < StyledTableCell align="left">{item.ProductPrice * item.quantity}</StyledTableCell> */}
                                <StyledTableCell align="left">
                                    <div className="icon-wrapper" onClick={() => deleteItem(cartItem.id)}>
                                        <CloseIcon style={{ color: '#2f4365' }} />
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table >
            </TableContainer >

            {/* <h4>Sub Total: {total}</h4>
            <h4>Grand Total
                <span className='float-end'>{totalCartPrice}</span>
            </h4> */}


        </div >
    );
}