import React from 'react';
import {
    Box, Flex, Grid, HStack,
} from '@chakra-ui/react'
import StatComponent from './StatComponent';

const StatDataGroup = () => {
  return (
    <Box >
        {/* <HStack spacing={4} >
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>

        </HStack >
        <HStack spacing={4}>
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>

        </HStack> */}
        <Grid gridColumnGap={3} gridRowGap={8} templateColumns='repeat(2, 198px)'>
            
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
        </Grid>
    </Box>
  )
}

export default StatDataGroup