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
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, sunt suscipit unde veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!',
            progressValue:'95'
        },
        {
            name: 'Test block content 2',
            text:'Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, sunt suscipit unde veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!',
            progressValue:'90'
        },
        {
            name: 'Test block content 3',
            text:'Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, sunt suscipit unde veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, ',
            progressValue:'80'
        },
        {
            name: 'Test block content 4',
            text:'Veritatis voluptates voluptatibus? Ad cumque harum minima provident quod sapiente sit tempore, voluptates!Consectetur cumque distinctio eius eum facere in ipsam nobis optio quod quos, reiciendis rem reprehenderit soluta, ',
            progressValue:'85'
        }
    ]

    const SelectService = (item) => {
        setVisibleItem(item)
    };

    return (
        <OurServiceContainer container>
            <Box sx={{width:'100%'}}>
                <Typography variant='h3' sx={{width:'100%', textAlign:'center', margin:'0 0 35px'}}>Our Service</Typography>
                <Typography variant='h6' sx={{width:'100%', textAlign:'center', margin:'0 0 35px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi deleniti dolore earum eos explicabo libero minus odit quibusdam unde voluptas!
                </Typography>
            </Box>
            <Grid container justifyContent="center" alignItems="center">
                <Grid container item sm={10}>
                    <Grid container item sm={12}>
                        <Grid item sm={1}>
                            <IconButton style={{padding:'10px', margin:'0 0 10px 0', background: visibleItem === 0 && 'rgba(0, 0, 0, 0.04)'}} onClick={()=> SelectService(0)}>
                                <SiAircanada size={40}/>
                            </IconButton>
                            <IconButton style={{padding:'10px', margin:'0 0 10px 0', background: visibleItem === 1 && 'rgba(0, 0, 0, 0.04)'}} onClick={()=> SelectService(1)}>
                                <AiFillEnvironment size={38}/>
                            </IconButton>
                            <IconButton style={{padding:'10px', margin:'0 0 10px 0', background: visibleItem === 2 && 'rgba(0, 0, 0, 0.04)'}} onClick={()=> SelectService(2)}>
                                <FaCamera size={38}/>
                            </IconButton>
                            <IconButton style={{padding:'10px', margin:'0 0 10px 0', background: visibleItem === 3 && 'rgba(0, 0, 0, 0.04)'}} onClick={()=> SelectService(3)}>
                                <FaHeart size={38}/>
                            </IconButton>
                        </Grid>
                        <Grid item sm={8}>
                            {serviceList?.map((el, i) => (
                                <>
                                    {visibleItem === i &&
                                        <Box key={el.name + i}>
                                            <Typography variant='h3' sx={{margin:'0 0 30px 0'}}>{el.name}</Typography>
                                            <Typography variant='p' sx={{fontSize:'18px'}}>{el.text}</Typography>
                                        </Box>
                                    }
                                </>
                            ))}
                        </Grid>
                        <Grid item sm={3}>
                            {serviceList?.map((el, i) => (
                                <>
                                    {visibleItem === i &&
                                    <AnimatedCircularProgress targetValue={el.progressValue} />
                                    }
                                </>
                            ))}
                        </Grid>
                    </Grid>
                    {/*<Grid item sm={6}>*/}
                    {/*    <Box display="flex" justifyContent="space-around" p={4}>*/}
                    {/*        <Box > /!* Этот блок заставляет прогресс-бар быть ниже видимой части *!/*/}
                    {/*            <AnimatedCircularProgress targetValue={75} />*/}
                    {/*            <AnimatedCircularProgress targetValue={95} />*/}
                    {/*            <AnimatedCircularProgress targetValue={85} />*/}
                    {/*        </Box>*/}
                    {/*    </Box>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>

        </OurServiceContainer>
    )
};

export default OurService;