import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import calulator from '../../Img/calulator.svg'


const OrderSummary = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            {/* <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            > */}

            <Box
                // gridColumn="span 4"
                // gridRow="span 2"
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
            // overflow="auto"
            >

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    colors={colors.grey[100]}
                    p="15px"
                >

                    <Typography color={colors.grey[100]} variant="h2" fontWeight="600" marginBottom="15px" fontSize="20px">
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
                        SubTotal
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$215</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >
                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                        Discount
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">15%</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >

                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" font-Size="20px" paddingBottom="20px">
                        Shipping Cost
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$50</Typography>
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
                    <Typography color="#2499ee;" fontWeight="600" fontSize="15px" paddingBottom="1px">$285</Typography>
                </Box>

                <Box>
                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingTop="10px" textAlign="center" paddingBottom="20px">
                        <button className="button">Proceed to payment</button>
                    </Typography>
                </Box>
                <div className="image1"><img src={calulator} alt="" width={200}></img></div>

            </Box>

        </Box >


    );
};

export default OrderSummary;