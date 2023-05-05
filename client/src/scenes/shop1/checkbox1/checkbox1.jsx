import { useTheme } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState, Fragment } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { tokens } from "../../../theme";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export default function CheckBox() {

    const [open, setOpen] = React.useState(false);

    const handleClose = (value: string) => {
        setOpen(false);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            backgroundColor={colors.primary[400]}
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItemButton
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    font-size="20px"

                >
                    Filter<span className="space2" />
                    <Button open={open} onClose={handleClose}><ClearSharpIcon /></Button>
                </ListItemButton>

                <Divider />

                <ListItemButton>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="shoes" control={<Radio />} label="Shoes" />
                            <FormControlLabel value="clothing" control={<Radio />} label="Clothing" />
                            <FormControlLabel value="accessories" control={<Radio />} label="Accessories" />
                        </RadioGroup>
                    </FormControl>
                </ListItemButton>

                <ListItemButton>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Men" />
                            <FormControlLabel required control={<Checkbox />} label="Woman" />
                            <FormControlLabel required control={<Checkbox />} label="Kids" />
                        </FormGroup>
                    </FormControl>
                </ListItemButton>
                <ListItemButton>
                    Color
                </ListItemButton>
                <ListItemButton
                    display="flex"
                    flexDirection="row"

                    justifyContent="space-between"
                >
                    <div class="circle" /><span class="space1" /><div class="circle1" /><span class="space1" />
                    <div class="circle2" /><span class="space1" /><div class="circle3" /><span class="space1" />
                    <div class="circle4" />
                </ListItemButton>
                <ListItemButton>
                    Price Range
                </ListItemButton>
                <ListItemButton
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <button className="buttonC">Min</button><span className="space" />
                    <button className="buttonC">Max</button>
                </ListItemButton>
                <ListItemButton>
                    Rating
                </ListItemButton>
                <ListItemButton>
                    <Stack spacing={1}>
                        <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                </ListItemButton>
                <ListItemButton>
                    <button className="buttonC"><RotateLeftOutlinedIcon /> Clear all</button>
                </ListItemButton>
            </List>
        </Box >
    );

    return (
        <Box
            display="grid"
            gridTemplateColumns="5fr 1fr 1fr"
            gap="1px"
        >

            <div className="checkOut"><span className="bgColor4"><LocalMallOutlinedIcon /></span><span className="space" />E-commerece</div>
            <Box
                // backgroundColor={colors.primary[400]}
                border="solid 2px #33383f"
                width="100px"
                display="flex"
                padding="1px"
                flexDirection="row"
                borderRadius="5px"
                justifyContent="space-between"
            >
                <Button onClick={toggleDrawer("filter", true)}>

                    <div style={{ display: 'flex' }}>
                        <Typography>
                            <span className="bgcolorW">
                                <FilterListOutlinedIcon />
                                <span className="space1" />Filter
                            </span>
                        </Typography>
                    </div>
                </Button>
                {/* <span className="bgcolorW"><FilterListOutlinedIcon /> Filter</span></Button> */}
                <Drawer
                    anchor="right"
                    open={state["filter"]}
                    onClose={toggleDrawer("filter", false)}
                >
                    {list("filter")}
                </Drawer>
            </Box>

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
                Sort by <ExpandMoreIcon />
            </Box>
        </Box >
    );
}