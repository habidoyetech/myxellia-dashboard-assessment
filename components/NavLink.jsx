"use client"

import { Box, Image, Link, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const NavLink = ({linkName, display, boxBorderRadius, textfontWeight, boxBg = 'transparent', linkLogo, linkLogoAlt}) => {
  return (
    <Box display={display} py={2} px={5} cursor='pointer' bgColor={boxBg} borderRadius={boxBorderRadius} >
        <Link textDecoration='none' _hover={{textDecoration: 'none'}}>
            <HStack spacing='8px' justifyContent='center' alignItems='center'>
                <Box>
                    <Image src={linkLogo} alt={linkLogoAlt}/>
                </Box>
                <Box>
                    <Text fontSize='14px' lineHeight='17px' fontWeight={textfontWeight}>{linkName}</Text>
                </Box>
            </HStack> 
        </Link>  
    </Box>
  )
}

export default NavLink