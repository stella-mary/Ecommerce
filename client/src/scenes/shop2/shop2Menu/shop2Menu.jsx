import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import calulator from '../../Img/calulator.svg'
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import React, { useState, withStyles } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Slider from '@mui/material/Slider';

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
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

const marks = [
    {
        value: 5,
        label: 'Min',
    },
    {
        value: 100,
        label: 'Max',
    },

];


function valuetext(value) {
    return `${value}°C`;
}

const Shop2Menu = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [selectedButton, setSelectedButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const buttonStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2499ef', // Set the desired background color
        color: '#FFFFFF', // Set the desired text color
        padding: '10px', // Set the desired padding
        fontWeight: 600, // Set the desired font weight

        textAlign: 'center', // Set the desired text alignment
        cursor: 'pointer', // Set the cursor to indicate it's clickable
        marginTop: '30px',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: '5px'
    };

    return (
        <Box m="20px">

            <Box
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
            >

                <Box
                    colors={colors.grey[100]}
                    p="15px"
                >

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="12px">
                        Categories
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Shoes' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Shoes')}
                        >
                            Shoes
                        </li>
                    </ul>
                    <div style={{ marginRight: '15px', paddingLeft: '10px', paddingRight: "10px", paddingTop: '5px', paddingBottom: '5px', borderRadius: '50%', backgroundColor: '#464d56', color: '#879db3' }}>8</div>

                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Furniture' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Furniture')}
                        >
                            Furniture
                        </li>
                    </ul>
                    <div style={{ marginRight: '15px', paddingLeft: '10px', paddingRight: "10px", paddingTop: '5px', paddingBottom: '5px', borderRadius: '50%', backgroundColor: '#464d56', color: '#879db3', cursor: 'pointer' }}>12</div>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Clothes' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Clothes')}
                        >
                            Clothes
                        </li>
                    </ul>
                    <div style={{ marginRight: '15px', paddingLeft: '10px', paddingRight: "10px", paddingTop: '5px', paddingBottom: '5px', borderRadius: '50%', backgroundColor: '#464d56', color: '#879db3', cursor: 'pointer' }}>70</div>
                </Box>


                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Accessories' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Accessories')}
                        >
                            Accessories
                        </li>
                    </ul>
                    <div style={{ marginRight: '15px', paddingLeft: '10px', paddingRight: "10px", paddingTop: '5px', paddingBottom: '5px', borderRadius: '50%', backgroundColor: '#464d56', color: '#879db3', cursor: 'pointer' }}>45</div>

                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Others' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Others')}
                        >
                            Others
                        </li>
                    </ul>
                    <div style={{ marginRight: '15px', paddingLeft: '10px', paddingRight: "10px", paddingTop: '5px', paddingBottom: '5px', borderRadius: '50%', backgroundColor: '#464d56', color: '#879db3', cursor: 'pointer' }}>12</div>

                </Box>

                <Box
                    colors={colors.grey[100]}
                    p="15px"
                >

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="12px">
                        Sort By
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Newest' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Newest')}
                        >
                            Newest
                        </li>
                    </ul>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Popular' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Popular')}
                        >
                            Popular
                        </li>
                    </ul>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Default' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Default')}
                        >
                            Default
                        </li>
                    </ul>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'Pricehigh' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('Pricehigh')}
                        >
                            Price: high to low
                        </li>
                    </ul>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                    colors={colors.grey[100]}
                >
                    <ul style={{ marginLeft: '-10px' }}>
                        <li
                            style={{
                                color: selectedButton === 'pricelow' ? '#2499ef' : '#8ca3ba',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleButtonClick('pricelow')}
                        >
                            Price: low to high
                        </li>
                    </ul>
                </Box>

                <Box
                    colors={colors.grey[100]}
                    p="15px"
                >

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="12px">
                        Price Range
                    </Typography>
                </Box>

                <Box sx={{ marginLeft: '10px' }}>
                    <Slider
                        sx={{
                            color: '#2499ef', // Change this value to the desired color
                            width: '80%',
                        }}
                        marks={marks}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>

                <Box>
                    <Typography variant="h6" fontSize="10px" style={buttonStyles}>

                        View Cart<span className="space1" />
                        <AddShoppingCartIcon style={{ marginRight: '5px', fontSize: '15px' }} />
                    </Typography>
                </Box>
            </Box>


        </Box>


    );
};

export default Shop2Menu;