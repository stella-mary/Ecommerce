import { Box, Typography } from "@mui/material";
// import shoe from "path/to/shoe";
import shoe from '../../Img/shoe.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductDetails() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "97%",
                alignItems: "top",
                gap: "1%",
                borderRadius: "10px",
                padding: "1%",
                m: "20px",
                backgroundColor: "#222b36",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "10%",
                    // border: "solid 1px red",
                }}
            >
                <img src={shoe} alt="Shoe 1" />
                <img src={shoe} alt="Shoe 2" />
                <img src={shoe} alt="Shoe 3" />
            </Box>

            <Box
                sx={{
                    width: "44%",
                    display: "flex",
                    objectFit: "cover",
                    alignItems: "top",
                }}
            >
                <div className="product-details" style={{ position: 'relative' }}>
                    <div className="product-image-container">
                        <img src={shoe} alt="Shoe 4" width="100%" />
                        <div className="heart-icon">
                            <FavoriteBorderIcon sx={{ fontSize: "20px", color: "white", textAlign: 'center' }} />

                        </div>
                    </div>
                </div>
            </Box>

            <Box
                sx={{
                    // border: "solid 1px green",
                    width: "44%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    marginLeft: "10px",
                    justifyContent: "center",
                }}
            >
                <Typography><span class="bgcolor5">In Stock</span></Typography>
                <Typography variant="h5" color="#8ca3ba" marginTop="20px">NIKE</Typography>
                <h2><b>Air Jordan 270</b></h2>
                <h4>$350</h4>
                <Typography variant="h5" marginTop="20px"
                    display="flex"
                    flexDirection="space-between"
                >Colors:<span className="space" />
                    <div class="circle" /> <span class="space1" /><div class="circle1" /><span class="space1" />
                    <div class="circle2" /> <span class="space1" />
                    <div class="circle4" />
                </Typography>

                < Box

                    border="solid 2px #33383f"
                    width="100px"
                    padding="10px"
                    textAlign="center"
                    display="flex"
                    flexDirection="row"
                    cursor="pointer"
                    borderRadius="5px"
                    justifyContent="space-between"

                >
                    <select>
                        <option value="">40</option>
                        <option value="">41</option>
                        <option value="">42</option>
                    </select>
                </Box>
                <Typography variant="h5" marginTop="20px">Quantity:</Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    marginTop="20px"
                    width="50%"
                >
                    <Typography><span class="bgcolor6">Add to cart</span></Typography>
                    <Typography><span class="bgcolor5">Buy Now</span></Typography>
                </Box>
            </Box>
        </Box >
    );
}

