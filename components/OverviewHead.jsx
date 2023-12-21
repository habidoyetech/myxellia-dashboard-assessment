"use client"

import React from 'react';
import {Box, HStack, Image, Text} from '@chakra-ui/react'

const OverviewHead = ({overviewLogo, overviewAlt, overViewName}) => {
  return (
    <Box py={2}   >
            
        <HStack spacing='8px' justifyContent='center' alignItems='center'>
            <Box>
                <Image src={overviewLogo} alt={overviewAlt}/>
            </Box>
            <Box>
                <Text fontSize='14px' lineHeight='17px' >{overViewName}</Text>
            </Box>
        </HStack> 
            
    </Box>
  )
}

export default OverviewHead