// Navigation.js
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinearProgressWithLabel from "./LinearProgressWithLabel"
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

const SlideImg = styled(Box)(({ theme }) => ({

}));

const Content = styled(Box)(({ theme }) => ({

}));

const ProgressBarContainer = styled(Box)(({ theme }) => ({

}));

const TeamSlider = (props) => {
    const {sliderSettings, data} = props;

    // console.log(sliderSettings,'sliderSettings1111111')
    return (
        <SliderContainer>
            <Slider {...sliderSettings}>
                {data && data.map((elem, i) => (
                    <SlideBox>
                        <SlideImg>
                            <img src={elem.image} alt="img"/>
                        </SlideImg>
                        <Content>
                            <Box>
                                <Typography variant='h4'>
                                    {elem.name}
                                </Typography>
                                <Typography variant='h4' sx={{textTransform:'uppercase'}}>
                                    {elem.jobTitle}
                                </Typography>
                                <Typography variant='p'>
                                    {elem.text}
                                </Typography>
                                <ProgressBarContainer>

                                </ProgressBarContainer>
                            </Box>
                        </Content>
                    </SlideBox>
                ))}
            </Slider>
            <LinearProgressWithLabel/>
        </SliderContainer>

    )

};

export default TeamSlider;