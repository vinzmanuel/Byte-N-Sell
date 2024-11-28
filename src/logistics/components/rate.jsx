import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <div className="my-5">
            <h2>
                Rate your experience with the seller!
            </h2>
            <Box className="pl-14"sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
            <Rating
                name="hover-feedback"
                value={value}
                size="large"
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
            </Box>
        </div>
    );
}