import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { mockDataCart } from "../../../data/mockData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
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
    return (
        <div className='checkOut'>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 500, }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockDataCart.map((item) => (
                            <StyledTableRow key={item.ProductName}>
                                <StyledTableCell align="left">
                                    <div>
                                        <img src={item.ProductImage} width={50} height={50} />
                                    </div>
                                    <div className='productDetails'>
                                        <div>{item.ProductName}</div>
                                        <div>Color: {item.ProductColor}</div>
                                        <div>Size: {item.ProductSize}</div>
                                    </div>
                                </StyledTableCell>

                                {/* <StyledTableCell align="right">{item.ProductImage}</StyledTableCell> */}
                                <StyledTableCell align="right">{item.ProductPrice}</StyledTableCell>
                                <StyledTableCell align="right">{item.carbs}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}