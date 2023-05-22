import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import calulator from '../../Img/calulator.svg'


const OrderSummary = ({ firstTitle, secondTitle, thirdTitle, fourthTitle, firstTitleAmount, SecondTitleAmount, ThirdTitleAmount, fourthTitleAmount }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
            >

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    colors={colors.grey[100]}
                    p="15px"
                >

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="15px">
                        Order Summery
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >
                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                        {firstTitle}
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">${firstTitleAmount}</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >
                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                        {secondTitle}
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">{SecondTitleAmount}%</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >

                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" font-Size="20px" paddingBottom="20px">
                        {thirdTitle}
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">${ThirdTitleAmount}</Typography>
                </Box>

                <div className="bordertop">&#160;</div>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >

                    <Typography color={colors.greenAccent[100]} variant="h5" fontSize="15px" fontWeight="600" paddingBottom="1px">
                        Total
                    </Typography>
                    <Typography color="#ff316f;" fontWeight="600" fontSize="15px" paddingBottom="1px">${fourthTitleAmount}</Typography>
                </Box>

                <Box>
                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingTop="10px" textAlign="center" paddingBottom="20px">
                        <button className="button">{fourthTitle}</button>
                    </Typography>
                </Box>
                <div className="image1">
                    <img src={`https://uko-react.vercel.app/static/illustration/cart-page.svg`} width={200} style={{ cursor: 'pointer', marginTop: '0px' }} />
                </div>
            </Box>
        </Box >
    );
};

export default OrderSummary;