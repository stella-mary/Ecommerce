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
import thanks from '../../Img/thanks.png'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';


const PaymentComplete1 = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
                marginBottom="25px"
                borderRadius="10px"
                padding="15px"
                backgroundColor={colors.primary[400]}
            >
                <div className="image1"><img src={thanks} width={300} /></div>
                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="20px"
                    marginTop="20px"
                    textAlign="center">
                    Thanks for placing order 🎉
                </Typography>

                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="15px"
                    marginTop="20px"
                    textAlign="center">
                    #AOSIDY2
                </Typography>
                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="20px"
                    textAlign="center">
                    We will contact you soon<br />when the shipment arrives</Typography>
                <p className="borderbottom">&#160;</p>
                <Box
                    // display="flex"
                    marginTop="20px"
                    // flexDirection="row"
                    marginLeft="30%"
                >

                    <button className="button2"><KeyboardArrowLeftOutlinedIcon /> Continue Shopping</button>
                    <span className="space" />
                    <button className="button1"><FileDownloadOutlinedIcon /> Download as PDF</button>
                </Box>
            </Box>
        </Box>
    );
};

export default PaymentComplete1;