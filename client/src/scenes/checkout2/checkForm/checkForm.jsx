
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


    const [isFocused, setIsFocused] = useState("");

    const handleFocus = (fieldId) => {
        setIsFocused(fieldId);
    };

    const handleBlur = () => {
        setIsFocused("");
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
                                    width: 350,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",

                                }}
                            >
                                <TextField
                                    color="secondary" //secondary theme.js color 
                                    variant="outlined"
                                    fullWidth
                                    label="Card Number"
                                    id="Card Number"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "Card Number" ? '#2499ef' : '#425673'}`,
                                        },
                                    }} //placeholder color

                                    onFocus={() => handleFocus("Card Number")}
                                    onBlur={handleBlur}
                                />

                            </Box>
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",

                                }}
                            >
                                <TextField
                                    color="secondary" //secondary theme.js color 
                                    variant="outlined"
                                    fullWidth
                                    label="Expiration"
                                    id="Expiration"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "Expiration" ? '#2499ef' : '#425673'}`,
                                        },
                                    }} //placeholder color

                                    onFocus={() => handleFocus("Expiration")}
                                    onBlur={handleBlur}
                                />

                            </Box>
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",

                                }}
                            >
                                <TextField
                                    color="secondary" //secondary theme.js color 
                                    variant="outlined"
                                    fullWidth
                                    label="Secure Code"
                                    id="Secure Code"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "Secure Code" ? '#2499ef' : '#425673'}`,
                                        },
                                    }} //placeholder color

                                    onFocus={() => handleFocus("Secure Code")}
                                    onBlur={handleBlur}
                                />

                            </Box>
                        </Box>

                        <div className="image">
                            <img src={`https://uko-react.vercel.app/static/illustration/payment-page.svg`} width={200} height={300} style={{ cursor: 'pointer' }} />

                        </div>
                    </Box>
                </Box>

                <Box
                    backgroundColor='#222b36'
                >

                    <Box
                        sx={{
                            width: 600,
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '10px',
                            maxWidth: '100%',
                            marginBottom: '20px',

                            marginTop: "20px",
                            // color: '#455a79',
                        }}
                    >


                        <TextField
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            label="Address"
                            id="Address"

                            InputLabelProps={{
                                style: {
                                    backgroundImage: 'none',
                                    color: `${isFocused === "Address" ? '#2499ef' : '#425673'}`,
                                },
                            }}
                            InputProps={{
                                style: {
                                    outline: 'none',
                                    backgroundColor: 'rgb(23, 28, 36)',
                                    backgroundImage: 'none',
                                    color: 'white'
                                }
                            }}
                            onFocus={() => handleFocus("Address")}
                            onBlur={handleBlur}
                        />


                        <TextField
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            label="Town/City"
                            id="Town/City"

                            InputLabelProps={{
                                style: {

                                    backgroundImage: 'none',
                                    color: `${isFocused === "Town/City" ? '#2499ef' : '#425673'}`,
                                },
                            }}
                            InputProps={{
                                style: {
                                    outline: 'none',
                                    backgroundColor: 'rgb(23, 28, 36)',
                                    backgroundImage: 'none',
                                    color: 'white'
                                }
                            }}
                            onFocus={() => handleFocus("Town/City")}
                            onBlur={handleBlur}
                        />

                    </Box>
                    <Box
                        sx={{
                            width: 500,
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '10px',
                            maxWidth: '100%',
                            marginBottom: '20px',
                            marginTop: "20px",
                            // color: '#455a79',
                        }}
                    >
                        <TextField
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            label="Mobile Number"
                            id="Mobile Number"

                            InputLabelProps={{
                                style: {

                                    backgroundImage: 'none',
                                    color: `${isFocused === "Mobile Number" ? '#2499ef' : '#425673'}`,
                                },
                            }}
                            InputProps={{
                                style: {
                                    outline: 'none',
                                    backgroundColor: 'rgb(23, 28, 36)',
                                    backgroundImage: 'none',
                                    color: 'white'
                                }
                            }}
                            onFocus={() => handleFocus("Mobile Number")}
                            onBlur={handleBlur}
                        />
                    </Box>
                </Box>
            </Box>

        </Box >
    );
};

export default CheckForm;