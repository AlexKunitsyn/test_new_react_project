import React, {useMemo, useState, useEffect} from 'react';

import {styled} from "@mui/material";
import { Box, Button, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';


import Grid from "@mui/material/Grid";
import palette from '../../src/theme/palette';
import useTheme from "@mui/material/styles/useTheme";
import { debounce } from 'lodash';
import Camera from '@mui/icons-material/Camera';
import { SiAircanada } from "react-icons/si";
import { AiFillEnvironment } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import AnimatedCircularProgress from "../_components/CircularProgress";

const OurServiceContainer = styled(Grid)(({ theme }) => ({
    padding:'50px 0',
}));

const OurService = props => {
    const  {itemArr} = props;
    const [visibleItem, setVisibleItem] =  useState(0);




    const serviceList = [
        {
            name: 'Test block content 1',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, sunt suscipit unde veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!'
        },
        {
            name: 'Test block content 2',
            text:'Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, sunt suscipit unde veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!'
        },
        {
            name: 'Test block content 3',
            text:'Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, sunt suscipit unde veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, '
        },
        {
            name: 'Test block content 4',
            text:'Veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, '
        }
    ]

    const SelectService = (item) => {
        console.log(item, '!!!!!!!item!!!!!!!');
        setVisibleItem(item)
    };



    return (
        <OurServiceContainer container>
            <Box>
                <Typography variant='h3' sx={{width:'100%', textAlign:'center', margin:'0 0 15px'}}>Our Service</Typography>
                <Typography variant='h6' sx={{width:'100%', textAlign:'center', margin:'0 0 15px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi deleniti dolore earum eos explicabo libero minus odit quibusdam unde voluptas!
                </Typography>
            </Box>
            <Grid container>
                <Grid container item sm={6}>
                    <Grid item sm={2}>
                        <IconButton style={{padding:'10px'}} onClick={()=> SelectService(0)}>
                            <SiAircanada size={40}/>
                        </IconButton>
                        <IconButton style={{padding:'10px'}} onClick={()=> SelectService(1)}>
                            <AiFillEnvironment size={38}/>
                        </IconButton>
                        <IconButton style={{padding:'10px'}} onClick={()=> SelectService(2)}>
                            <FaCamera size={38}/>
                        </IconButton>
                        <IconButton style={{padding:'10px'}} onClick={()=> SelectService(3)}>
                            <FaHeart size={38}/>
                        </IconButton>
                    </Grid>
                    <Grid item sm={10}>
                        {serviceList?.map((el, i) => (
                            <>
                                {visibleItem === i &&
                                    <Box key={el.name + i}>
                                        <Typography variant='h4'>{el.name}</Typography>
                                        <Typography variant='p'>{el.text}</Typography>
                                    </Box>
                                }
                            </>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    <Box display="flex" justifyContent="space-around" p={4}>
                        <Box > {/* Этот блок заставляет прогресс-бар быть ниже видимой части */}
                            <AnimatedCircularProgress targetValue={75} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </OurServiceContainer>
    )
};

export default OurService;