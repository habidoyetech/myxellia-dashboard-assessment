"use client"

import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const OverviewBoxData = ({value, type, width ='100%'}) => {
  return (
    <Box borderRadius='12px' border='1px' borderColor='#f5f5f5' width={width} height='75px' display='flex' flexDir='column' alignItems='center' justifyContent='center'>
        <Heading fontSize='24px' fontWeight={600} textAlign='center' lineHeight='30px'>{value}</Heading>
        <Text fontWeight={400} fontSize='12px' color='#606060' lineHeight='17px' textAlign='center'>{type}</Text>
    </Box>
  )
}

export default OverviewBoxData