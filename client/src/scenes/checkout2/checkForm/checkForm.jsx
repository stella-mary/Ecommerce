
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Calendar } from "@fullcalendar/core";
import ATM from '../../Img/ATM.png'


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

const CheckForm = () => {

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

                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                    >
                        <Box
                            display='flex'
                            flexDirection='column'
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    color: '#455a79',
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

                                {/* <TextField fullWidth label="Card Number" id="Card Number" InputLabelProps={{ style: { color: "#2499ef" } }} /> */}

                                {/* <TextField fullWidth label="Card Number" id="Card Number" /> */}
                            </Box>
                            <Box
                                sx={{
                                    width: 300,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    color: '#455a79',
                                }}
                            >
                                <TextField fullWidth label="Expiration" id="Expiration" InputLabelProps={{ style: { color: '#2499ef' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />
                            </Box>
                            <Box
                                sx={{
                                    width: 300,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    color: '#455a79',
                                }}
                            >
                                <TextField fullWidth label="Secure Code" id="Secure Code"
                                    InputLabelProps={{ style: { color: '#2499ef', borderColor: 'red' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />
                            </Box>
                        </Box>

                        <div className="image"><img src={ATM} width={150} height={200} /></div>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >

                    <Box
                        sx={{
                            width: 500,
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '10px',
                            maxWidth: '100%',
                            marginBottom: '20px',
                            marginTop: "20px",
                            color: '#455a79',
                        }}
                    >
                        <TextField fullWidth label="Address" id="Address" InputLabelProps={{ style: { color: '#2499ef' } }}
                            InputProps={{
                                style: {
                                    borderColor: 'red', // Set the border color
                                },
                            }} />

                        <TextField fullWidth label="Town/City" id="Town/City" InputLabelProps={{ style: { color: '#2499ef' } }}
                            InputProps={{
                                style: {
                                    borderColor: 'red', // Set the border color
                                },
                            }} />
                    </Box>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            marginBottom: '20px',
                            marginTop: "20px",
                            color: '#2499ef',
                        }}
                    >
                        <TextField fullWidth label="Mobile Number" id="Mobile Number" InputLabelProps={{ style: { color: '#2499ef' } }}
                            InputProps={{
                                style: {
                                    borderColor: 'red', // Set the border color
                                },
                            }} />
                    </Box>


                </Box>
            </Box>



        </Box >
    );
};

export default CheckForm;