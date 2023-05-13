import React, { useState, withStyles } from 'react';
import PropTypes from 'prop-types';
import { tokens } from "../../../theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import { mockDataProduct } from "../../../data/mockData";


import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}


export default function FloatingActionButtonZoom() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [review, setReview] = useState(mockDataProduct);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };


    return (
        <Box
            sx={{
                bgcolor: '#222b36',
                width: 950,
                position: 'relative',
                minHeight: 200,
                margin: '20px'
            }}
        >
            <AppBar position="static" color="default" style={{ backgroundColor: '#3d454e', borderRadius: '10px 10px 0px 0px' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    // variant="fullWidth"
                    aria-label="action tabs example"
                    style={{ justifyContent: '-moz-initial', display: 'flex' }}
                >
                    <Tab
                        label="Description"
                        {...a11yProps(0)}
                        style=
                        {{
                            color: value === 0 ? '#2499ef' : '#8ca3ba',
                            fontWeight: value === 0 ? 'bold' : 'bold',
                            borderBottom: `2px solid ${value === 0 ? '#171c24' : '#2499ef'}`,
                            textTransform: 'none'
                        }}
                    />
                    <Tab
                        label="Reviews"
                        {...a11yProps(1)}
                        style={{
                            color: value === 1 ? '#2499ef' : '#8ca3ba',
                            fontWeight: value === 1 ? 'bold' : 'bold',
                            borderBottom: `2px solid ${value === 1 ? '#2499ef' : '#171c24'}`,
                            textTransform: 'none'
                        }}
                    />
                </Tabs>
            </AppBar>
            <Box
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
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
                </TabPanel>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'space-betwen' }}>
                    <TabPanel value={value} index={1} dir={theme.direction}>

                        {review.map(review => (
                            <div key={review.id} style={{ marginTop: '10px', flex: '1', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>
                                    <img src={review.ReviewImage} className="product-image" style={{ borderRadius: '60%' }} />

                                    <h2 style={{ fontSize: '15px', marginBottom: '0px', textAlign: 'center' }}>{review.ReviewName}</h2>
                                    <p style={{ fontSize: '12px', color: '#879eb4', textAlign: 'center', marginTop: '0px' }}>{review.ReviewDate}</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px', width: '350px' }}>
                                    <Stack spacing={1}>
                                        <Rating name="size-medium" defaultValue={2} />
                                    </Stack>
                                    {/* <p>{review.ReviewRating}<br /><br /> */}
                                    <p style={{ fontSize: '12px', lineHeight: '2em' }}>{review.ReviewContent}</p>

                                    <p style={{ fontSize: '12px', color: '#2499ef', display: 'flex', alignItems: 'center', fontWeight: 'bold', marginTop: '1px' }}>
                                        <ThumbUpIcon style={{ marginRight: '5px' }} /> Thank({review.ReviewLike})
                                    </p>
                                </div>
                            </div>

                        ))}
                    </TabPanel>
                    <p style={{ borderRight: '1px solid #656b73' }}></p>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '15px', marginBottom: '0px', textAlign: 'center' }}>Average rating</h2>
                        <p style={{ textAlign: 'center', fontSize: '20px', color: '#2499ef' }}><b>4/5</b></p>
                        <Stack spacing={1}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                        <p style={{ textAlign: 'center', color: '#8ca3ba' }}><b>(8.24k reviews)</b></p>
                        <Button
                            variant="contained"
                            color="#2499ef"
                            startIcon={<EditIcon />}
                        >
                            Write Your Review
                        </Button>
                    </div>
                </div>

            </Box>
        </Box >
    );
}