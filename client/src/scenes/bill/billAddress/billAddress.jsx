import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { mockDataCart } from "../../../data/mockData";
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';


const BillAddress = () => {

    const [isFocused, setIsFocused] = useState("");

    const handleFocus = (fieldId) => {
        setIsFocused(fieldId);
    };

    const handleBlur = () => {
        setIsFocused("");
    };

    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#2499ef',
            },
        },
    });

    const innerTheme = createTheme({
        palette: {
            primary: {
                main: '#171c24',
            },
        },
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const [checked, setChecked] = React.useState(true);

    const handleChangeCheck = (event) => {
        setChecked(event.target.checked);
    };

    const [country, setCountry] = useState("")

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px">
            <Box >
                <Typography
                    fontWeight="500"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    marginBottom="20px"

                    color={colors.grey[100]}
                >
                    Billing & Address

                    <Button
                        sx={{ textTransform: 'none', padding: '10px' }}
                        variant="outlined"
                        onClick={handleClickOpen}

                        style={{ color: 'white', background: '#2499ef' }}
                    >
                        + Add New Address
                    </Button>
                </Typography>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                    PaperProps={{
                        style:
                        {
                            backgroundColor: '{colors.primary[400] }',
                            minWidth: '500px',
                            border: 'solid 1px white',
                            // backgroundColor: 'rgb(23, 28, 36)',
                            backgroundImage: 'none',
                        }
                    }}
                >
                    <DialogTitle id="alert-dialog-title" >
                        {"Add new Address"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Radio
                                theme={outerTheme}
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                title="home"
                                inputProps={{ 'aria-label': 'A' }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fill: '#2499ef', // Replace 'your-color-here' with the desired color value
                                    },
                                }}
                            />
                            <label>Home</label>

                            <Radio
                                theme={outerTheme}
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fill: '#2499ef', // Replace 'your-color-here' with the desired color value
                                    },
                                }}
                            />
                            <label>
                                Office
                            </label>


                            <Box
                                sx={{
                                    width: 500,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    backgroundColor: colors.primary[400],
                                    // color: '#455a79',
                                }}
                            >

                                <TextField
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                    label="Full Name"
                                    id="Full Name"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "Phone" ? '#2499ef' : '#425673'}`,
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            outline: 'none',
                                            backgroundColor: colors.primary[400],
                                            // backgroundColor: 'rgb(23, 28, 36)',
                                            backgroundImage: 'none',
                                            color: 'white'
                                        }
                                    }}
                                    onFocus={() => handleFocus("Full Name")}
                                    onBlur={handleBlur}
                                />


                                <TextField
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                    label="Phone"
                                    id="Phone"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "Phone" ? '#2499ef' : '#425673'}`,
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
                                    onFocus={() => handleFocus("Phone")}
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
                                    label="City"
                                    id="City"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "City" ? '#2499ef' : '#425673'}`,
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
                                    onFocus={() => handleFocus("City")}
                                    onBlur={handleBlur}
                                />



                                <TextField
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                    label="Country"
                                    id="Country"

                                    InputLabelProps={{
                                        style: {

                                            backgroundImage: 'none',
                                            color: `${isFocused === "Country" ? '#2499ef' : '#425673'}`,
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
                                    onFocus={() => handleFocus("Country")}
                                    onBlur={handleBlur}
                                />

                            </Box>

                            <Checkbox
                                theme={outerTheme}
                                checked={checked}
                                onChange={handleChangeCheck}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fill: '#2499ef', // Replace 'your-color-here' with the desired color value
                                    },
                                }}
                            />
                            <span>Use this address as default</span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} style={{ border: '1px solid #5d6066', marginRight: '8px', color: 'white' }}>
                            Cancel
                        </Button>
                        <Button
                            sx={{ textTransform: 'none' }}
                            onClick={handleClose} autoFocus style={{ border: '1px solid #5d6066', background: '#2499ef', color: 'white' }}>
                            Deliver to this address
                        </Button>
                    </DialogActions>
                </Dialog>


                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" fontSize="12px" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space1" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                            gap="230px"
                            alignItems="center"
                        // gap="300px"
                        >
                            <Typography variant="h6" fontWeight="600" fontSize="10px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography>
                                <div className="tick-icon">

                                    <CheckIcon style={{ fontSize: '10px', lineHeight: '10px', color: 'black' }} />
                                </div>
                            </Typography>

                        </Box>
                    </Box >
                </Box>
            </Box >

            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" fontSize="12px" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space1" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="250px"
                        >
                            <Typography variant="h6" fontWeight="600" fontSize="10px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" color={colors.grey[100]} >
                                <div className="delete-icon">
                                    <span><DeleteIcon /></span>
                                </div>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
            </Box >


            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" fontSize="12px" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space1" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="250px"
                        >
                            <Typography variant="h6" fontWeight="600" fontSize="10px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />

                                USA
                            </Typography>
                            <Typography variant="h5" color={colors.grey[100]} >
                                <div className="delete-icon">
                                    <span><DeleteIcon /></span>
                                </div>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
                <Typography
                // marginLeft="20px"
                >
                    <div style={{ display: 'flex' }}>
                        <ChevronLeftOutlinedIcon />
                        <span className="space1" />Back
                    </div>
                </Typography>
            </Box >




        </Box >


    );
};

export default BillAddress;