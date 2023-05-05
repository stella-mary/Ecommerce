import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, withStyles } from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import visa from '../../Img/visa.png'
import Mastercard from '../../Img/Mastercard.png'
import americanexpress from '../../Img/americanexpress.png'


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {

    value: PropTypes.any,
};

const outerTheme = createTheme({
    palette: {
        primary: {
            main: '#2499ef',
        },
    },
});

// const innerTheme = createTheme({
//     palette: {
//         primary: {
//             main: green[500],
//         },
//     },
// });


const PaymentMethod = () => {



    const [selectedValue, setSelectedValue] = useState("a")

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}

                >

                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                        fontSize="15px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="space-between"
                    >
                        Payment Method
                    </Typography>



                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                        fontSize="15px"
                        paddingBottom="20px"
                    >

                        <Radio
                            theme={outerTheme}
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            title="PayPal"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <label>
                            <span className="bgColor7">Pay</span>
                            <span className="bgColor8">Pal</span>
                        </label>

                    </Typography>
                    <p className="bordertop">&#160;</p>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center" // Set alignItems to 'center' to vertically align items
                        justifyContent="space-between"
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                            fontSize="15px"
                            paddingBottom="20px"
                        >
                            <Radio
                                theme={outerTheme}
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                title="Credit or debit card"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                            <label>
                                Credit or debit card
                            </label>

                        </Typography>
                        <Box // Use another Box component to group the images and add space between them
                            display="flex"
                            marginTop="-10px"
                            alignItems="center"
                        >
                            <img src={visa} width="30" alt="" />
                            <Box sx={{ marginLeft: '8px' }} /> {/* Add left margin to create space */}
                            <img src={Mastercard} width="30" alt="" />
                            <Box sx={{ marginLeft: '8px' }} /> {/* Add left margin to create space */}
                            <img src={americanexpress} width="30" alt="" />
                        </Box>
                    </Box>


                    <Box
                        sx={{
                            width: 600,
                            maxWidth: '100%',
                            marginBottom: '20px',
                            marginTop: "20px",
                            color: '#283b82;',
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Card Number"
                            id="Card Number"
                            InputLabelProps={{ style: { color: '#2499ef' } }}
                            InputProps={{
                                style: {
                                    borderColor: 'red', // Set the border color
                                },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 600,
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            maxWidth: '100%',
                            marginBottom: '20px'
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Exp Date"
                            id="Exp Date"
                            InputLabelProps={{ style: { color: '#2499ef' } }}
                            InputProps={{
                                style: {
                                    borderColor: 'red', // Set the border color
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="CVC"
                            id="CVC"
                            InputLabelProps={{ style: { color: '#2499ef' } }}
                            InputProps={{
                                style: {
                                    borderColor: 'red', // Set the border color
                                },
                            }}
                        />
                    </Box>
                    <p className="bordertop">&#160;</p>
                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                        fontSize="15px"
                        paddingBottom="20px"
                    >

                        <Radio

                            theme={outerTheme}
                            checked={selectedValue === 'c'}
                            onChange={handleChange}
                            value="c"
                            name="radio-buttons"
                            title="Cash on Delivery"
                            inputProps={{ 'aria-label': 'C' }}
                        />
                        <label>
                            Cash on Delivery
                        </label>

                    </Typography>
                </Box >
            </Box >
            <Typography>
                <div style={{ display: 'flex' }}>
                    <ChevronLeftOutlinedIcon />
                    <span className="space1" />Back</div></Typography>
        </Box >
    );
};

export default PaymentMethod;