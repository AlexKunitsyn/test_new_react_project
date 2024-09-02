// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../_helpers/store';
import Box from "@mui/material/Box";
import {styled} from "@mui/material";
import FirstScreenImg from '../../images/firstScreen.jpg'

const screenHeight = window.innerHeight;

const FirstScreen = styled(Box)(({ theme }) => ({
    height: screenHeight,
    width: '100vw',
    background:FirstScreenImg,
    '& img': {
        width:'100%',
        height:'100%'
    }
}));

const MainContainer = styled('Box')(({ theme }) => ({

}));

const Home = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    console.log('Высота видимой области экрана:', screenHeight, 'пикселей');
    console.log(FirstScreenImg);


    return (
        <MainContainer>
            <FirstScreen>
                <img src={{FirstScreenImg}} alt="img"/>
            </FirstScreen>

            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
            <div style={{height:'1000px'}}>
                <p>Counter: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </MainContainer>
    );
};

export default Home;
