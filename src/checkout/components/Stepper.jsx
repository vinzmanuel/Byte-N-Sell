import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { db } from './../../../configs';
import { eq } from 'drizzle-orm';
import { Listing } from './../../../configs/schema';

export default function StepperCheckout({ listingDetails }) {
    const { id } = useParams(); // Get the id from the URL
    console.log(id);
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        streetAddress: '',
        city: '',
        zipCode: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        setErrors({ ...errors, [field]: false });
    };

    const validateStep = () => {
        const newErrors = {};
        if (activeStep === 0) {
            if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
            if (!formData.expirationDate) newErrors.expirationDate = 'Expiration date is required';
            if (!formData.cvv) newErrors.cvv = 'CVV is required';
        } else if (activeStep === 1) {
            if (!formData.streetAddress) newErrors.streetAddress = 'Street address is required';
            if (!formData.city) newErrors.city = 'City is required';
            if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = async () => {
        if (validateStep()) {
            // If it's the last step, update the database
            
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setFormData({
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            streetAddress: '',
            city: '',
            zipCode: '',
        });
        setErrors({});
    };

    // Function to update the database when the user completes the checkout
    const handleFinish = async () => {
        try {
            await db.update(Listing) // Replace 'listing' with your table name
            .set({ available: false })
            .where(eq(Listing.id, id));

            
            navigate('/logistics'); // Redirect after successful update
        } catch (error) {
            console.error('Error updating listing availability:', error);
        }
    };

    const steps = [
        {
            label: 'Payment Details',
            description: (
                <Box>
                    <TextField label="Card Number" variant="outlined" fullWidth margin="normal"
                        value={formData.cardNumber} onChange={handleChange('cardNumber')} error={!!errors.cardNumber} helperText={errors.cardNumber}
                    />
                    <TextField
                        label="Expiration Date" variant="outlined" fullWidth margin="normal" value={formData.expirationDate}
                        onChange={handleChange('expirationDate')} error={!!errors.expirationDate} helperText={errors.expirationDate}
                    />
                    <TextField
                        label="CVV" variant="outlined" fullWidth margin="normal"
                        value={formData.cvv} onChange={handleChange('cvv')} error={!!errors.cvv} helperText={errors.cvv}
                    />
                </Box>
            ),
        },
        {
            label: 'Location',
            description: (
                <Box>
                    <TextField
                        label="Street Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.streetAddress}
                        onChange={handleChange('streetAddress')}
                        error={!!errors.streetAddress}
                        helperText={errors.streetAddress}
                    />
                    <TextField
                        label="City"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.city}
                        onChange={handleChange('city')}
                        error={!!errors.city}
                        helperText={errors.city}
                    />
                    <TextField
                        label="ZIP Code"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.zipCode}
                        onChange={handleChange('zipCode')}
                        error={!!errors.zipCode}
                        helperText={errors.zipCode}
                    />
                </Box>
            ),
        },
        {
            label: 'Confirm',
            description: (
                <Box>
                    <Typography variant="body1" gutterBottom>
                        Please review your details before confirming.
                    </Typography>
                    <Typography variant="subtitle1">Payment Details</Typography>
                    <Typography variant="body2">
                        Card Number: {formData.cardNumber}
                    </Typography>
                    <Typography variant="body2">
                        Expiration Date: {formData.expirationDate}
                    </Typography>
                    <Typography variant="subtitle1">Location</Typography>
                    <Typography variant="body2">
                        Address: {formData.streetAddress}, {formData.city}, {formData.zipCode}
                    </Typography>
                </Box>
            ),
        },
    ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
        }}>
            <h2 className="mt-20 text-4xl font-bold">Checkout</h2>
            <Box sx={{ minWidth: 600 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                {step.description}
                                <Box sx={{ mb: 2 }}>
                                    <Button
                                        variant="contained"
                                        onClick={index === steps.length - 1 ? handleFinish : handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            All steps completed - you're finished
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Paper>
                )}
            </Box>
        </div>
    );
}
