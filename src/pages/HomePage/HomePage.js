// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../redux/store';
import {styled} from "@mui/material";
import { Box, Button, Typography, Stack } from '@mui/material';

// import palette from '../../theme/palette';
// import typography from '../../styles/typography';

import {scrollToTarget} from '../../_helpers/utils';

import MainSlider from '../../_components/MainSlider';
import FutureProject from "../../_components/FeatureProject";
import OurService from "../../_components/OurService";
import OurPortfolio from "../../_components/OurPortfolio";


import FirstScreenImg from '../../images/firstScreen.jpg'
import FirstScreenImg2 from "../../images/firstScreen2.jpg";
import FirstScreenImg3 from "../../images/firstScreen3.jpg";
import TeamSlider from "../../_components/TeamSlider";


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

const MainContent = styled(Box)(({ theme }) => ({

}));

const MainContainer = styled(Box)(({ theme }) => ({

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

const FeaturedProject = styled(Box)(({ theme }) => ({
    padding:'25px 0',
    // background: palette.lightGray,
    // color: palette.orange,
}));

const TheTeam = styled(Box)(({ theme }) => ({
    padding:'0',

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

    const projectPreview  = [
        {
            image: FirstScreenImg,
            name:'test Project 1'
        },
        {
            image: FirstScreenImg2,
            name:'test Project 2'
        },
        {
            image: FirstScreenImg3,
            name: 'test Project 3'
        }

    ];

    // const [triggerGetPosts, responseGetPosts] = useLazyGetPostsQuery();
    // const [triggerGetPhotoList, responseGetPhotoList] = useLazyGetPhotoListQuery();

    // const { data: posts, error, isLoading } = useGetPostsQuery();

    const testApi = () => {
        // console.log('origjnfrgidfgvnb')
        // triggerGetPosts()
        // triggerGetPhotoList()
    };

    // console.log(responseGetPhotoList, 'responseGetPhotoList')

    return (
        <MainContainer>
            <FirstScreen>
                {/*<FirstScreenImg/>*/}
                <WelcomeMessage>{welcome}</WelcomeMessage>
                <MainSlider sliderSettings={sliderSettings}/>
            </FirstScreen>
            <MainContent>
                <Button onClick={() => scrollToTarget('test')} variant="outlined">TEST</Button>
                <Button onClick={() => testApi()} variant="outlined">test Api</Button>

            </MainContent>
            <FeaturedProject>
                <Box>
                    <Typography
                        variant='h3'
                        sx={{
                            textAlign:'center',
                            padding:'10px'
                        }}
                    >Featured Projects
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{
                            textAlign:'center',
                            padding:'10px 10px 30px'
                        }}
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>

                </Box>
                <FutureProject itemArr={projectPreview}/>
                <OurService/>
                {/*<OurPortfolio/>*/}
            </FeaturedProject>
            <TheTeam>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        variant='h3'
                        sx={{
                            textAlign:'center',
                            padding:'10px 10px 30px',
                            textTransform:'uppercase'
                        }}>
                        The Team
                    </Typography>
                    <Typography
                        variant='p'
                        sx={{
                            fontSize:'18px',
                            textAlign:'center',
                            width:'500px'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, voluptate.
                    </Typography>
                    <Box>
                        <TeamSlider/>
                    </Box>
                </Box>

            </TheTeam>

        </MainContainer>
    );
};

export default Home;
