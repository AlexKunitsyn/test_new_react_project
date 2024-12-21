// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../_helpers/store';
import {styled} from "@mui/material";
import { Box, Button, Typography } from '@mui/material';
import FirstScreenImg from '../../images/firstScreen.jpg'
import palette from '../../theme/palette';
import typography from '../../styles/typography';

import {scrollToTarget} from '../../_helpers/utils';

import MainSlider from '../../_components/MainSlider';
// import { ReactComponent as FirstScreenImg } from '../../images/firstScreen.jpg';

const screenHeight = window.innerHeight;
const screenHeight2 = document.documentElement.clientHeight;

const FirstScreen = styled(Box)(({ theme }) => ({
    height: screenHeight+'px',
    // width: '100vw',
    top:'0px',
    position:'relative',
    // background:FirstScreenImg,
    overflow:'hidden',
    '& img': {
        width:'100%',
        height:'100%',
        objectFit:'cover',

    }
}));
const WelcomeMessage = styled(Box)(({ theme }) => ({
   position:'absolute',
    top:'50%',
    left:'50%',
    fontSize:'65px',
    color:'#fff',
    zIndex:'9',
    transform:'translate(-50%,-50%)',
}));
const MainContent = styled(Box)(({ theme }) => ({

}));

const MainContainer = styled('Box')(({ theme }) => ({

}));

const FeaturedProject = styled('Box')(({ theme }) => ({
    // background: palette.blackMain,
    // color: palette.orange,
}));

const Home = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const welcome = 'Welcome';

    // console.log('Высота видимой области экрана:', screenHeight, 'пикселей');
    // console.log('Высота:', screenHeight2, 'пикселей');
    // console.log(FirstScreenImg);
    const sliderSettings = {
        // dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <MainContainer>
            <FirstScreen>
                {/*<FirstScreenImg/>*/}
                <WelcomeMessage>{welcome}</WelcomeMessage>
                <MainSlider sliderSettings={sliderSettings}/>
            </FirstScreen>
            <MainContent>
                <Button onClick={() => scrollToTarget('test')}>TEST</Button>

            </MainContent>
            <FeaturedProject>
                <Typography
                    variant='h5Bold'
                    sx={{
                        textAlign:'center',
                        padding:'10px'
                    }}
                >Featured Projects
                </Typography>

            </FeaturedProject>
            {/*<h2>Home</h2>*/}
            {/*<p>Welcome to the Home page!</p>*/}
            {/*<div style={{height:'1000px'}}>*/}
            {/*    <p>Counter: {count}</p>*/}
            {/*    <button onClick={() => dispatch(increment())}>Increment</button>*/}
            {/*    <button onClick={() => dispatch(decrement())}>Decrement</button>*/}
            {/*</div>*/}
        </MainContainer>
    );
};

export default Home;
