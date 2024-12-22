import React from 'react';

import {styled} from "@mui/material";
import { Box, Button, Typography } from '@mui/material';


import Grid from "@mui/material/Grid";
import palette from '../../src/theme/palette';

const ProjectList = styled(Grid)(({ theme }) => ({

}));


const ProjectItem = styled(Grid)(({ theme }) => ({
   position:'relative',
    'img': {
        width:'100%',
        height:'100%',
        objectFit:'cover',
    }
}));

const Shadow = styled(Box)(({ theme }) => ({
    position:'absolute',
    top:'0',
    left:'0',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    background:'rgba(0,0,0, 0.5)',
    color:palette.mainColor,
    cursor:'pointer'

}));


const FutureProject = props => {
  const  {itemArr} = props;

  console.log(itemArr,'itemArr!!!!')

  return (
      <ProjectList container>
          {itemArr?.map((el, i) => (
              <ProjectItem item sm={i === 0 ? 6 : 3}>
                 <img src={el.image} alt={'img'}/>
                <Shadow>
                    <Typography variant='h6' color={palette.mainColor}>{el.name}</Typography>

                </Shadow>
              </ProjectItem>
              ))}

      </ProjectList>
  )
};

export default FutureProject;