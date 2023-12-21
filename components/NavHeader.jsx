"use client"

import React from 'react';
import { Box, Container, Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react';
import ComponentLayout from './ComponentLayout';


const NavHeader = () => {
  return (
    <ComponentLayout boxH={82} bg='#191919' display='flex' alignItems='center' justifyContent='center'>
        <Flex>
            <Box>
                <Image src='/icons/Logo.svg' alt='company logo'/>    
            </Box>
            <Spacer/>
            <HStack spacing='32px'>
                <HStack display={['none','none', 'flex']} spacing='24px'>
                    <Box>
                        <Image src='/icons/Plus.svg' alt=''/>
                    </Box>
                    <Box>
                        <Image src='/icons/Calendar.svg' alt='Calender'/>
                    </Box>
                    <Box>
                        <Image src='/icons/notification.svg' alt='Notification'/>
                    </Box>
                </HStack>
                <Flex gap={5}>
                    <Box >
                        <Image src='/icons/profile.svg' alt='Profile Image' h='48px' height='48px'/>
                    </Box>
                    <HStack spacing={5}>
                        <Text display={['none', 'block']} color='white' fontWeight={500}>Ahmed Ali</Text>
                        <Box cursor='pointer'>
                            <Image  src='/icons/Vector.svg' alt='' h='6px' w='12px'/>

                        </Box>
                        
                    </HStack>
                </Flex>
                

            </HStack>


        </Flex>
    </ComponentLayout>
  )
}

export default NavHeader