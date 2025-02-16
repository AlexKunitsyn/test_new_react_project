import React, {useMemo, useState, useEffect} from 'react';

import {styled} from "@mui/material";
import { Box, Button, Typography, IconButton } from '@mui/material';
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createClient } from 'pexels';

import AnimatedCircularProgress from "../_components/CircularProgress";
// import {useLazyGetAlbumsQuery} from "../redux/services/general.service";
import {useLazyGetAlbumsLexicaApiQuery} from "../redux/services/general.service";
import {useLazyGetPhotosQuery} from "../redux/services/pixels.service";

const TabItem = styled(Tab)(({}) => ({
    color:'#000'
}));

const OurPortfolio = props => {

    const  {itemArr} = props;
    const [visibleItem, setVisibleItem] =  useState(0);
    const [value, setValue] = React.useState(0);
    const client = createClient('GLSsEG4TOZ1WfStWbRV2taqBGqmHNgEoky6pG0hPf1XS4LjKaBq8Iblt');
    const [triggerGetAlbumsLexicaApi, responseGetAlbumsLexicaApi] = useLazyGetAlbumsLexicaApiQuery();
    const [triggerGetPhotos, responseGetPhotos] = useLazyGetPhotosQuery();
    // console.log(responseGetAlbums);

    // useEffect(() => {
    //     console.log(value,'111111value')
    //     triggerGetPhotos('nature')
    //
    // }, [value]);

    useEffect(() => {
        console.log('111111value')
        triggerGetAlbumsLexicaApi('mountains')

    }, []);

    console.log(responseGetAlbumsLexicaApi,'responseGetAlbumsLexicaApi');

    const API_KEY = client; // Замените на ваш ключ
    const query = 'nature';
    const perPage = 20;

    // fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
    //     method: 'GET',
    //     headers: {
    //         Authorization: `Bearer ${API_KEY}`
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Полученные фотографии:', data.photos);
    //     })
    //     .catch(error => {
    //         console.error('Ошибка при выполнении запроса:', error);
    //     });

    // client.collections.featured({ per_page: 10 }).then(collections => {
    //     // console.log(collections,'!!!!!!collections')
    // });
    // client.photos.show({ id: 2014422 }).then(photo => { console.log(photo,'!!!!!!photo')});





    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index &&
                <Box
                    sx={{
                        p: 3,
                        color:'#000'
                    }}>
                    {children}
                </Box>}
            </div>
        );
    };

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ];

    const SelectService = (item) => {
        setVisibleItem(item)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1,
                borderColor: 'divider',
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{

                    }}
                >
                    <TabItem label="Item One" {...a11yProps(0)} />
                    <TabItem label="Item Two" {...a11yProps(1)} />
                    <TabItem label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box sx={{overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box sx={{overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {responseGetAlbumsLexicaApi?.data?.hits?.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.largeImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.largeImageURL}?w=248&fit=crop&auto=format`}
                                    alt={item.tags}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    )
};

export default OurPortfolio;