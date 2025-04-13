// Navigation.js
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SlideBox = styled('div')(({ theme }) => ({
    width:'100%',
    height:'100%',
    '& img': {
        width:'100%',
        height:'100%',
        objectFit:'cover',
    }
}));


const TheTeam = (props) => {
    const {} = props;

    return (
        <Box>

        </Box>

    )

};

export default TheTeam;