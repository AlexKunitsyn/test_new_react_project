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

    useEffect(() => {
        triggerGetAlbumsLexicaApi('ocean');
    }, []);

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
        switch (newValue) {
            case 0:
                triggerGetAlbumsLexicaApi('ocean');
                break;
            case 1:
                triggerGetAlbumsLexicaApi('mountain');
                break;
            case 2:
                triggerGetAlbumsLexicaApi('trees');
                break;
            default:
                triggerGetAlbumsLexicaApi('ocean');
        }
        console.log(newValue,'-------newValue')

    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };


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
                    aria-label=""
                    style={{

                    }}
                >
                    <TabItem label="Item One" {...a11yProps(0)} />
                    <TabItem label="Item Two" {...a11yProps(1)} />
                    <TabItem label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box>
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
            <CustomTabPanel value={value} index={1}>
                <Box>
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
                <Box>
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
        </Box>
    )
};

export default OurPortfolio;