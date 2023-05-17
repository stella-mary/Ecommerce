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

            customColor: {
                main: '#656b73', // Replace with your desired color value
            },
        },
    });



    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleClick = (value) => {
        setSelectedValue(value);
        console.log("clicked" + value)
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
                <div
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    font-size="20px"
                >
                    Filter

                    <IconButton onClick={handleClose}>
                        <ClearSharpIcon />
                    </IconButton>
                </div>
                <Divider />

                <div style={{ marginLeft: '10px' }}>
                    <FormControl>
                        <div style={{ marginTop: '20px' }}><b>Categories</b></div>
                        <RadioGroup
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
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <FormControl>
                        <div style={{ marginTop: '20px' }}><b>Gender</b></div>
                        <FormGroup
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fill: '#2499ef', // Replace '#2499ef' with the desired color value
                                },
                                // '& .Mui-checked': {
                                //     color: '#656b73', // Replace '#656b73' with the desired color value
                                //     borderColor: '#656b73', // Replace '#656b73' with the desired color value for the checkbox outline color
                                // },
                            }}
                        >
                            <FormControlLabel control={<Checkbox theme={outerTheme} />} label="Men" />
                            <FormControlLabel control={<Checkbox theme={outerTheme} />} label="Woman" />
                            <FormControlLabel control={<Checkbox theme={outerTheme} />} label="Kids" />
                        </FormGroup>
                    </FormControl>
                </div>
                <div style={{ marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}><b>Colors</b></div>

                <div
                    style={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft: '20px',
                        marginRight: '20px',
                        justifyContent: 'space-between',
                    }}
                >

                    {NewColors.map(({ value, color }) => (

                        <div
                            key={value}
                            // onClick={() => handleChange(value)}
                            onClick={() => handleClick(value)}
                            style={{
                                backgroundColor: color,
                                width: selectedValue === value ? '24px' : '20px',
                                height: selectedValue === value ? '24px' : '20px',
                                borderRadius: '50%',
                                transition: 'all 0.3s',
                                cursor: 'pointer',
                                boxShadow: selectedValue === value ? 'inset 0px 0px 0px 2px black' : 'none',
                                // padding: selectedValue === value ? '4px' : '0'
                            }}
                        />
                    ))}
                </div>
                {/* <FormControlLabel
                            key={value}
                            control={
                                <Radio
                                    checked={selectedValue === value}
                                    onChange={handleChange}
                                    onClick={() => console.log(" clicked" + value)}
                                    value={value}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': value }}
                                //    style = {{ marginRight: '30px' }}
                                />
                            }
                            label=""
                            style={{
                                backgroundColor: selectedValue === value ? 'your-selected-color' : color,
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                // transition: 'background-color 0.3s',
                                cursor: 'pointer',

                            }}

                        />
                    ))}

                </div> */}
                <div style={{ marginTop: '20px', marginLeft: '10px' }}><b>Price Range</b></div>


                <div style={{ display: 'flex', justifyContent: 'left', marginLeft: '10px', marginTop: '10px', gap: '10px' }}>
                    <input
                        type="text" // Set the desired text field type
                        className="input-field" // Add a class name for the input field
                        style={{
                            borderColor: '#3d454e',
                            padding: '10px',
                            background: '#222b36',
                            borderRadius: '10px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            width: '110px',
                            outline: 'none',
                            fontWeight: 'bold'

                        }}
                        placeholder="Min" // Optional: Add a placeholder text
                        onFocus={(e) => {
                            e.target.style.color = 'white'; // Change the text color to white when clicked
                        }}
                        onBlur={(e) => {
                            e.target.style.color = '#2f4365'; // Change the text color back to the original color when focus is lost
                        }}
                    />

                    <input
                        type="text" // Set the desired text field type
                        className="input-field" // Add a class name for the input field
                        style={{
                            borderColor: '#3d454e',
                            padding: '10px',
                            background: '#222b36',
                            borderRadius: '10px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            width: '110px',
                            outline: 'none',
                            fontWeight: 'bold'
                        }}
                        placeholder="Max" // Optional: Add a placeholder text
                        onFocus={(e) => {
                            e.target.style.color = 'white'; // Change the text color to white when clicked
                        }}
                        onBlur={(e) => {
                            e.target.style.color = '#2f4365'; // Change the text color back to the original color when focus is lost
                        }}
                    />
                </div>


                <div style={{ marginTop: '20px', marginLeft: '10px' }}><b>Rating</b></div>
                <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                    <Stack spacing={1}>
                        <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#3d454e',
                        padding: '8px',
                        background: '#222b36',
                        borderRadius: '5px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        width: '230px',
                        marginLeft: '10px',
                        marginRight: '5px',
                        marginTop: '40px',
                        marginBottom: '20px',
                        outline: 'none',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    <RotateLeftOutlinedIcon />
                    <span className="space1" style={{ marginLeft: '5px' }} /> Clear all
                </div>

            </List >
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