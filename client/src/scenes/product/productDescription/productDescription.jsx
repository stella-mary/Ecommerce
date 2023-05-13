import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, withStyles } from 'react';
import Box from '@mui/material/Box';
import { mockDataProduct } from "../../../data/mockData";


const PaymentMethod = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [review, setReview] = useState(mockDataProduct);

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="-moz-initial"
                borderRadius='10px 10px 0px 0px'
                padding="15px"
                gap="40px"
                backgroundColor='#3d454e'
            >
                <Typography
                    color='#8ca3ba'
                    variant="h5"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="10px"
                    marginBottom="10px"
                    cursor="pointer"
                >
                    Description
                </Typography>

                <Typography
                    color='#8ca3ba'
                    variant="h5"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="10px"
                    marginBottom="10px"
                    cursor="pointer"

                >
                    Reviews
                </Typography>
            </Box>

            <Box
                backgroundColor='#222b36'
                padding="15px"
            >
                <Typography
                    color='white'
                    variant="h6"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="10px"
                    marginBottom="10px"
                    lineHeight="2em"

                >
                    Specification:<br />
                    You can't go wrong with a pair of Jordan sneakers. Crafted from black and white leather, these Air Jordan 1 Mid SE sneakers are a timeless Easy as that.
                </Typography>
                <Typography
                    color='white'
                    variant="h6"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="30px"
                    marginBottom="10px"
                    lineHeight="2em"

                >
                    MATERIAL AND WASHING INSTRUCTIONS<br />
                    Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued
                </Typography>
            </Box>
            <Box>
                {review.map(review => (
                    <div key={review.id}>
                        <h2>{review.ReviewName}</h2>
                        <img src={review.ReviewImage} alt={review.ReviewImage} />
                        <p>{review.ReviewDate}</p>
                        <p>{review.ReviewRating}</p>
                        <p>{review.ReviewContent}</p>
                        <p>{review.ReviewLike} Likes</p>
                    </div>
                ))}
            </Box>

        </Box >
    );
};

export default PaymentMethod;