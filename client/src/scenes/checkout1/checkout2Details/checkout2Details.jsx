import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
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

    backgroundColor: '#222b36',


    // hide last border
    '&:last-child td, &:last-child th': {
        border: 'none',
        paddingBottom: '20px',
    },
    '& td': {
        borderBottom: 'none',
    },
}));





export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell align="left">Quantity</StyledTableCell>
                        <StyledTableCell align="left">Price</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockDataCart.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell>
                                <div className='product-container'>
                                    <img src={row.ProductImage} className="product-image" style={{ borderRadius: '10%' }} />
                                    <div>
                                        <div>{row.ProductName}</div>
                                        <div>Color: {row.ProductColor}</div>
                                        <div>Size: {row.ProductSize}</div>

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

                                    >
                                        -
                                    </button>
                                    <span style={{ flex: 1, textAlign: "center" }}>{row.quantity}</span>
                                    <button
                                        style={{
                                            border: "none",
                                            backgroundColor: "transparent",
                                            cursor: "pointer",
                                            marginLeft: "5px",
                                            fontSize: '15px',
                                            color: 'white'
                                        }}

                                    >
                                        +
                                    </button>
                                </div>
                                <span className="color22">Available: 12</span>
                            </StyledTableCell>

                            <StyledTableCell align="left" style={{ fontSize: '12px' }}>$ {row.ProductPrice}</StyledTableCell>
                            <StyledTableCell align="left"><CloseIcon /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}