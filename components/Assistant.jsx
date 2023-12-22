"use client"

import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Assistant = () => {
  return (
    <Box cursor='pointer' pos='fixed' bottom='48px' right='40px'>
        <HStack bg='#4545fe' fontSize='14px' p={2} color='#ffffff' borderRadius='70px'>
            <Box>
                <Image src='/icons/touch.svg' alt='touch'/>   
            </Box>
            <Text>Veerge Assistant</Text>
            <Box>
                <Image src='/icons/fi-rr-cross-circle.svg' alt='cross-circle'/>   
            </Box>
        </HStack>
    </Box>
  )
}

export default Assistant