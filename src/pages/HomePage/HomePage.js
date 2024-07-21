// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../_helpers/store';

const Home = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
            <div>
                <p>Counter: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
};

export default Home;
