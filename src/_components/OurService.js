import React, {useMemo, useState} from 'react';

import {styled} from "@mui/material";
import { Box, Button, Typography } from '@mui/material';


import Grid from "@mui/material/Grid";
import palette from '../../src/theme/palette';
import useTheme from "@mui/material/styles/useTheme";
import { debounce } from 'lodash';

const OurServiceContainer = styled(Grid)(({ theme }) => ({

}));

const OurService = props => {
    const  {itemArr} = props;



    return (
        <OurServiceContainer container>

        </OurServiceContainer>
    )
};

export default OurService;