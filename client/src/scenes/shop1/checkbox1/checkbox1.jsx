import { useTheme } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import { yellow } from "@mui/material/colors";

const NewColors = [
    { value: 'a', color: '#fe316f' },
    { value: 'b', color: '#fe8969' },
    { value: 'c', color: '#8c8dff' },
    { value: 'd', color: '#2499ef' },
    { value: 'e', color: '#27ce88' },
];


export default function CheckBox() {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        // Add any other code or state updates for closing the sidebar
    };


    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#2499ef',
            },
        },
    });

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
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
                    font-size="20px">
                    Filter<span className="space2" />

                    <IconButton onClick={handleClose}>
                        <ClearSharpIcon />
                    </IconButton>
                </ListItemButton>

                <Divider />

                <ListItemButton style={{ backgroundColor: 'transparent' }}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fill: '#2499ef', // Replace 'your-color-here' with the desired color value
                                },
                            }}
                        >
                            <FormControlLabel theme={outerTheme} value="all" control={<Radio theme={outerTheme} />} label="All" />
                            <FormControlLabel theme={outerTheme} value="shoes" control={<Radio theme={outerTheme} />} label="Shoes" />
                            <FormControlLabel theme={outerTheme} value="clothing" control={<Radio theme={outerTheme} />} label="Clothing" />
                            <FormControlLabel theme={outerTheme} value="accessories" control={<Radio theme={outerTheme} />} label="Accessories" />
                        </RadioGroup>
                    </FormControl>
                </ListItemButton>

                <ListItemButton style={{ backgroundColor: 'transparent' }}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <FormGroup
                        >
                            <FormControlLabel control={<Checkbox defaultChecked theme={outerTheme} />} label="Men" />
                            <FormControlLabel control={<Checkbox theme={outerTheme} />} label="Woman" />
                            <FormControlLabel control={<Checkbox theme={outerTheme} />} label="Kids" />
                        </FormGroup>
                    </FormControl>
                </ListItemButton>
                <ListItemButton style={{ backgroundColor: 'transparent' }}>
                    Color
                </ListItemButton>


                <div
                    backgroundColor='transparent'
                    display="flex"
                    flexDirection="row"

                    justifyContent="space-between"

                >
                    {NewColors.map(({ value, color }) => (
                        <FormControlLabel
                            key={value}
                            control={
                                <Radio
                                    checked={selectedValue === value}
                                    onChange={handleChange}
                                    onClick={() => console.log(" clicked" + selectedValue)}
                                    value={value}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': value }}
                                    style={{ display: 'none' }}
                                // sx={{ "& > div": { animation: selectedValue ? "0.2s linear" : "undefined" }, }}
                                />
                            }
                            label=""
                            style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%' }}
                        />
                    ))}

                </div>
                <ListItemButton style={{ backgroundColor: 'transparent' }}>
                    Price Range
                </ListItemButton>
                <ListItemButton
                    backgroundColor='transparent'
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <button className="buttonC">Min</button><span className="space" />
                    <button className="buttonC">Max</button>
                </ListItemButton>
                <ListItemButton style={{ backgroundColor: 'transparent' }}>
                    Rating
                </ListItemButton>
                <ListItemButton style={{ backgroundColor: 'transparent' }}>
                    <Stack spacing={1}>
                        <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                </ListItemButton>
                <ListItemButton style={{ backgroundColor: 'transparent' }}>

                    <button className="buttonC"><RotateLeftOutlinedIcon /><span className="space1" /> Clear all</button>

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

                    <div style={{ display: 'flex', textTransform: 'none' }}>

                        {/* sx={{  }} */}
                        <Typography>
                            <span className="bgcolorW">
                                <div class="middle-align">
                                    <FilterListOutlinedIcon />
                                    <span className="space1" />Filter
                                </div>
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