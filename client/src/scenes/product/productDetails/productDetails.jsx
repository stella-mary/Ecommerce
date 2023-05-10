// import { Box, Typography } from "@mui/material";
// // import shoe from "path/to/shoe";
// import shoe from '../../Img/shoe.jpg'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function ProductDetails() {
//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 width: "97%",
//                 alignItems: "top",
//                 // justifyContent: "space-between",
//                 gap: "1%",
//                 borderRadius: "10px",
//                 padding: "1%",
//                 m: "20px",
//                 backgroundColor: "#222b36",
//                 // border: "solid 1px yellow",
//             }}
//         >
//             <Box
//                 sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "10px",
//                     width: "10%",
//                     // border: "solid 1px red",
//                 }}
//             >
//                 <img src={shoe} alt="Shoe 1" />
//                 <img src={shoe} alt="Shoe 2" />
//                 <img src={shoe} alt="Shoe 3" />
//             </Box>

//             <Box
//                 sx={{
//                     // border: "solid 1px red",
//                     width: "44%",
//                     display: "flex",
//                     alignItems: "center",
//                     objectFit: "cover",
//                 }}
//             >
//                 <img src={shoe} alt="Shoe 4" width="100%" />
//             </Box>

//             <Box
//                 sx={{
//                     // border: "solid 1px green",
//                     width: "44%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "left",
//                     marginLeft: "10px",
//                     justifyContent: "center",
//                 }}
//             >
//                 <Typography><span class="bgcolor5">In Stock</span></Typography>
//                 <h4>NIKE</h4>
//                 <h2><b>Air Jordan 270</b></h2>
//                 <h4>$350</h4>
//                 <Typography variant="h5" marginTop="20px"
//                     display="flex"
//                     flexDirection="space-between"
//                 >Colors:<span className="space" />
//                     <div class="circle" /> <span class="space1" /><div class="circle1" /><span class="space1" />
//                     <div class="circle2" /> <span class="space1" />
//                     <div class="circle4" />
//                 </Typography>

//                 < Box

//                     border="solid 2px #33383f"
//                     width="100px"
//                     padding="10px"
//                     textAlign="center"
//                     display="flex"
//                     flexDirection="row"
//                     cursor="pointer"
//                     borderRadius="5px"
//                     justifyContent="space-between"

//                 >
//                     <select>
//                         <option value="">40</option>
//                         <option value="">41</option>
//                         <option value="">42</option>
//                     </select>
//                 </Box>
//                 <Typography variant="h5" marginTop="20px">Quantity:</Typography>
//                 <Box
//                     display="flex"
//                     justifyContent="space-between"
//                     marginTop="20px"
//                     width="50%"
//                 >
//                     <Typography><span class="bgcolor6">Add to cart</span></Typography>
//                     <Typography><span class="bgcolor5">Buy Now</span></Typography>
//                 </Box>
//             </Box>
//         </Box >
//     );
// }

import React from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import shoe from '../../Img/shoe.jpg'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const ProductBox = () => {

    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeToggle = () => {
        setIsLiked((prevLiked) => !prevLiked);
    };


    return (
        <div className="product-box">
            <div className="product-image1">
                <img className="shoe-image" src={shoe} alt="Shoe 1" />
                <img className="shoe-image" src={shoe} alt="Shoe 2" />
                <img className="shoe-image" src={shoe} alt="Shoe 3" />
            </div>
            <div className="product-details">
                <div className="image-container">
                    <img className="shoe-image1" src={shoe} alt="Shoe 4" />
                    <div className="heart-icon"><FavoriteBorder sx={{ fontSize: "30px", color: "white", textAlign: 'center' }} />
                        {/* onClick={handleLikeToggle}>
                        {isLiked ? <Favorite /> : <FavoriteBorder />} */}
                    </div>
                </div>
            </div>
            <div className="product-details">
                <div className="product-name">In Stock</div>
                <div className="product-name">Nike Air Jordan</div>
                <div className="product-price">$350</div>
                <div className="product-colors">
                    Colors: <span>Red, Blue, Black</span>
                </div>
                <div className="product-size">Select Size: 10</div>
                <div className="product-quantity">
                    Quantity: <input type="number" min="1" max="10" defaultValue="1" />
                </div>
                <div className="product-actions">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                </div>

                <div className="product-icons">
                    <Facebook className="icon" />
                    <Instagram className="icon" />
                    <Twitter className="icon" />
                </div>
            </div>
        </div>
    );
};

export default ProductBox;

