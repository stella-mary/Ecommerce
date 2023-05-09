
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { mockDataCart } from "../../../data/mockData";


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
    '&:nth-of-type(odd)': {
        backgroundColor: '#222b36',
    },
    '&:nth-child(2)': {
        backgroundColor: '#222b36',
    },
    '&:last-child td, &:last-child th': {
        border: 'none',
        paddingBottom: '0px',
    },
    '& td': {
        borderBottom: 'none',
    },
}));





function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables() {


    const [cart, setCart] = useState(mockDataCart);

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
        <div className='checkOut'>

            <TableContainer component={Paper} >

                <div align="left" style={{ backgroundColor: '#222b36', padding: '15px' }}>Cart <span className='color'>(3 item)</span></div>


                <Table sx={{ minWidth: 500, }} aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item) => (

                            <StyledTableRow key={item.id} style={{ marginBottom: '20px' }}>
                                <StyledTableCell >
                                    <div class="product-container">
                                        <img src={item.ProductImage} className="product-image" style={{ borderRadius: '10%' }} />
                                        <div>
                                            <div>{item.ProductName}</div>
                                            <div><span className="color21">Color:</span> {item.ProductColor}</div>
                                            <div><span className="color21">Size:</span> {item.ProductSize}</div>
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
                                                if (item.quantity > 0) {
                                                    decrease(item.id);
                                                }
                                            }}
                                        >
                                            -
                                        </button>
                                        <span style={{ flex: 1, textAlign: "center" }}>{item.quantity}</span>
                                        <button
                                            style={{
                                                border: "none",
                                                backgroundColor: "transparent",
                                                cursor: "pointer",
                                                marginLeft: "5px",
                                                fontSize: '15px',
                                                color: 'white'
                                            }}
                                            onClick={() => increase(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>


                                    <span className="color22">Available: 12</span>
                                </StyledTableCell>

                                {/* <StyledTableCell align="right">{item.ProductImage}</StyledTableCell> */}
                                < StyledTableCell align="left" style={{ fontSize: '12px' }}>{item.ProductPrice}</StyledTableCell>

                                <StyledTableCell align="left"><CloseIcon style={{ color: '#2f4365' }} /></StyledTableCell>

                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>

            </TableContainer >
        </div >
    );
}