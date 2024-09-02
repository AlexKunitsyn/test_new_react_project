// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../_helpers/store';
import Box from "@mui/material/Box";
import {styled} from "@mui/material";

const Home = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const MainContainer = styled('Box')(({ theme }) => ({
        padding:'-60px 0 0 0'
    }));

    return (
        <MainContainer>
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
