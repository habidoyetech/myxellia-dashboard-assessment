"use client"


import React from 'react';
import {
    Box, Grid, 
} from '@chakra-ui/react'
import StatComponent from './StatComponent';

const StatDataGroup = () => {
  return (
    <Box w='100%'>
        <Grid gridColumnGap={2} gridRowGap={4} templateColumns='repeat(2, 1fr)'>   
            <StatComponent statPadding={3} statHelpText='Balance' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statPadding={3} statHelpText='Deposit' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statPadding={3} statHelpText='Purchase' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
            <StatComponent statPadding={3} statHelpText='Withdrawal' borderRadius='12px' border='1px' borderColor='#e4e4e4' statNumberColor='#4545fe' statIcon='/icons/Frame.svg' statPercentColor='#12d8a0'/>
        </Grid>
    </Box>
  )
}

export default StatDataGroup