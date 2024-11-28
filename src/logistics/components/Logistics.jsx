import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Rate from './rate';
import { Link } from 'react-router-dom';

const steps = [
    {
        label: 'Parcel has been packed',
        description: 'Your parcel is packed and ready for shipment.',
    },
    {
        label: 'Parcel is in transit to sort center',
        description: 'The parcel is on its way to the sorting facility.',
    },
    {
        label: 'Parcel has arrived at the sort center',
        description: 'The parcel is now at the sorting center for processing.',
    },
    {
        label: 'Parcel is out for delivery',
        description: 'The parcel is with the delivery rider and will arrive soon.',
    },
    {
        label: 'Parcel has been delivered',
        description: 'The parcel has been successfully delivered to the recipient.',
    },
];

export default function LogisticsProgressStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    React.useEffect(() => {
        if (activeStep < steps.length) {
            const timer = setTimeout(() => {
                // If it's the last step, jump directly to completion without delay
                if (activeStep === steps.length - 1) {
                    setActiveStep(steps.length); // Skip the timeout
                } else {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1); // Proceed to the next step
                }
            }, 5000); 
            return () => clearTimeout(timer); // Cleanup timeout on effect cleanup
        }
    }, [activeStep]);

    return (
        <div className="flex flex-col items-center justify-center pb-20">
            <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography>All steps completed - Delivery successful!</Typography>
                        <Rate/>
                        <Link to={'/'}>
                            <Button>Continue</Button>
                        </Link>
                    </Box>
                )}
            </Box>
        </div>
    );
}
