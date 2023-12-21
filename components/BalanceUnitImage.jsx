"use client"

import React from 'react';
import {
    Box, Image
} from '@chakra-ui/react'

const BalanceUnitImage = ({width, height, padding = 10, borderColor = '#f5f5f5'}) => {
  return (
    <Box p={padding} bg='#f5f5f5' borderRadius='12px' border='1px' borderColor={borderColor}>
        <Image src='/icons/person.svg' w={width} h={height} alt='Balance Unit Image'/>
    </Box>
    
  )
}

export default BalanceUnitImage