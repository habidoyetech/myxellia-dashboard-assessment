"use client"


import React from 'react';
import {
    Box, Flex, Grid, HStack,
} from '@chakra-ui/react'
import StatComponent from './StatComponent';

const StatDataGroup = () => {
  return (
    <Box >
        
        <Grid gridColumnGap={3} gridRowGap={5} templateColumns='repeat(2, 198px)'>
            
            <StatComponent statPadding={3} statHelpText='Balance' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statPadding={3} statHelpText='Deposit' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statPadding={3} statHelpText='Purchase' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statPadding={3} statHelpText='Withdrawal' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
        </Grid>
    </Box>
  )
}

export default StatDataGroup