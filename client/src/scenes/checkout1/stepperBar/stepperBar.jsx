import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const steps = [
    'Cart',
    'Billing & address',
    'Payment',
];

export default function StepperBar() {
    return (
        <div>

            < Box sx={{ width: '100%', marginTop: '25px' }
            }>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box >
        </div>
    );
}