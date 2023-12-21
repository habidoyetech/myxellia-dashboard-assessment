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

const StatComponent = ({ statPadding = 0, statNumberColor, statLabelValue, statIcon, statPercentColor, borderRadius = '0px', border='0px', borderColor, statHelpText, statNumberFontSize = '20px', statHelpTextFontSize = '10px'}) => {
  return (
    <Box  h='75px' display='flex' alignItems='center'>
        <Stat p={statPadding}  borderRadius={borderRadius} border={border} borderColor={borderColor}>
            {statLabelValue ? <StatLabel color='#12D8A0' fontSize='14px'>{statLabelValue}</StatLabel>: <></>}
            <StatNumber mb={1} textAlign='left' color={statNumberColor} fontWeight={600} fontSize={statNumberFontSize} lineHeight='25px'>&#8358; 0.00</StatNumber>
            <StatHelpText>
                <HStack fontSize={statHelpTextFontSize}>
                    <Text color='#3d3d3d'>{statHelpText}</Text>
                    <Image src={statIcon}/>
                    {
                      statPercentColor ? <Text fontSize='10px' color={statPercentColor}>0 &#37;</Text>: <></>
                    }
                    
                </HStack> 
            </StatHelpText>
        </Stat>
    </Box>
  )
}

export default StatComponent