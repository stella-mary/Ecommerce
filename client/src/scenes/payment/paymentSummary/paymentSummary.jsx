import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import calulator from '../../Img/calulator.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


const PaymentSummary = () => {
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

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" marginBottom="15px" marginTop="10px" fontSize="15px">
                        Order Summery</Typography>
                    <Typography fontWeight="600" font-Size="10px" marginTop="10px" paddingBottom="20px"><span className="bgColor10"><CreateOutlinedIcon /></span>
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
                        Items
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$230</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >
                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                        VATS 0%
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$0</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="15px"
                    paddingRight="10px"
                >

                    <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" font-Size="20px" paddingBottom="20px">
                        Sub Total
                    </Typography>
                    <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$230</Typography>
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
                    <Typography color="#2499ee;" fontWeight="600" fontSize="15px" paddingBottom="1px"><span className="bgColor11">$230</span></Typography>
                </Box>

                <Box>
                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingTop="10px" textAlign="center" marginTop="10px" paddingBottom="20px">
                        <button className="button">

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AddShoppingCartIcon />
                                <span class="space1" /> Place Order</div>
                        </button>
                    </Typography>
                </Box>

            </Box>

        </Box >


    );
};

export default PaymentSummary;