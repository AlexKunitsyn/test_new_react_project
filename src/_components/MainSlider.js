// Navigation.js
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstScreenImg from "../images/firstScreen.jpg";
import FirstScreenImg2 from "../images/firstScreen2.jpg";
import FirstScreenImg3 from "../images/firstScreen3.jpg";
import FirstScreenImg4 from "../images/firstScreen4.jpg";
import FirstScreenImg5 from "../images/firstScreen5.jpg";
import FirstScreenImg6 from "../images/firstScreen6.jpg";
import FirstScreenImg7 from "../images/firstScreen7.jpg";
import FirstScreenImg8 from "../images/firstScreen8.jpg";


const SlideBox = styled('div')(({ theme }) => ({
    width:'100%',
    height:'100%',
    '& img': {
        width:'100%',
        height:'100%',
        objectFit:'cover',
    }
}));

const SliderContainer = styled(Box)(({ theme }) => ({
    overflow:'hidden',
    width:'100%',
    height:'100%',
    '.slick-slider, .slick-list, .slick-track': {
        height: '100%',
    },
    '.slick-slide': {
        height: '100%',
        'div':{
            height: '100%',
        }

    }
}));

const MainSlider = (props) => {
    const {sliderSettings} = props;

    // console.log(sliderSettings,'sliderSettings1111111')
    return (
        <SliderContainer>
            <Slider {...sliderSettings}>
                <SlideBox>
                    <img src={FirstScreenImg} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg2} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg3} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg4} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg5} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg6} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg7} alt="img"/>
                </SlideBox>
                <SlideBox>
                    <img src={FirstScreenImg8} alt="img"/>
                </SlideBox>
            </Slider>
        </SliderContainer>

    )

};

export default MainSlider;