import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const OrderSummary = () => {
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
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                >
                    <Box>
                        <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                            Items
                        </Typography>
                        <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" paddingBottom="20px">
                            VATS 0%
                        </Typography>
                        <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="600" font-Size="20px" paddingBottom="20px">
                            Sub Total
                        </Typography>
                    </Box>

                    <Box p="5px 10px" >
                        <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$230</Typography>
                        <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$0</Typography>
                        <Typography fontWeight="600" font-Size="15px" paddingBottom="20px">$230</Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p="15px"
                >
                    <Box>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontSize="15px" fontWeight="600" paddingBottom="1px">
                            Total
                        </Typography>
                    </Box>
                    <Box p="5px 10px" >
                        <Typography color="#2499ee;" fontWeight="600" fontSize="15px" paddingBottom="1px"><span class="bgColorR">$230</span></Typography>
                    </Box>
                </Box>

                <Box
                    p="5px 10px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    gap="1px"
                    backgroundColor={colors.primary[400]}
                >

                    <button className="button4">Apply Coupon</button>
                    <button className="button3">Apply</button>
                </Box>


                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >

                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingTop="10px" textAlign="center" paddingBottom="20px">
                        <button className="button"><AddShoppingCartIcon /> Check Out Now</button>
                    </Typography>
                </Box>


            </Box>
        </Box >



    );
};

export default OrderSummary;