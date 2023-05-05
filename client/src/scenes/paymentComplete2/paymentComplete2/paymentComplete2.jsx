import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';


const PaymentComplete2 = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box

                borderRadius="10px"
                padding="15px"
                backgroundColor={colors.primary[400]}
                paddingBottom="50px"
            >
                <Box
                    textAlign="center"
                    marginTop="40px"
                >

                    <div style={{ backgroundColor: '#2499ef', borderRadius: '50%', display: 'inline-block', padding: '25px', width: '10%' }}>
                        <CheckIcon style={{ fontSize: '30px' }} />
                    </div>
                </Box>
                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="20px"
                    marginTop="20px"
                    textAlign="center">
                    Success
                </Typography>


                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="20px"
                    color="#455a79"
                    textAlign="center"
                >
                    thank you for shopping using Uko</Typography>

                <Typography
                    color={colors.greenAccent[100]}
                    marginLeft="35%"
                    variant="h5"
                    fontWeight="600"
                    width="30%"
                    marginTop="15px"
                    paddingTop="10px"
                    textAlign="center"
                >
                    <button className="button">Back to Order</button>
                </Typography>
            </Box>
        </Box >

    );
};

export default PaymentComplete2;