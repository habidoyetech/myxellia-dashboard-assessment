"use client"

import React from 'react';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Box,
    Text,
    Image,
    HStack
  } from '@chakra-ui/react'

const StatComponent = ({statNumberColor, statIcon, statPercentColor}) => {
  return (
    <Box w='189px' h='75px' display='flex' alignItems='center'>
        <Stat p={3} borderRadius='12px' border='1px' borderColor='#e4e4e4'>
            {/* <StatLabel>Collected Fees</StatLabel> */}
            <StatNumber mb={2} textAlign='left' color={statNumberColor} fontWeight={600} fontSize='20px' lineHeight='25px'>&#8358; 0.00</StatNumber>
            <StatHelpText>
                <HStack fontSize='10px'>
                    <Text color='#3d3d3d'>Balance</Text>
                    <Image src={statIcon}/>
                    <Text fontSize='10px' color={statPercentColor}>0 &#37;</Text>
                </HStack> 
            </StatHelpText>
        </Stat>
    </Box>
  )
}

export default StatComponent