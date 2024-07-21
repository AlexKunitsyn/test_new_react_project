// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUS';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
    </Routes>
);

export default AppRoutes;
