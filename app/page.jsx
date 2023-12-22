"use client"

import ComponentLayout from '@/components/ComponentLayout';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import './globals.css'
import SalesOverview from '@/components/SalesOverview';
import OtherOverviews from '@/components/OtherOverviews';
import Assistant from '@/components/Assistant';


export default function Home() {
  return (
    <ComponentLayout >
      <Box pt={['30px', '40px']}>
        <Box>
          <HStack>
            <Box>
              <Image src='/icons/profileImage.svg' alt='Profile Image'/>
            </Box>
            <Box>
              <Text fontSize='20px' lineHeight='25.36px' fontWeight='600'>Hi Ahmed</Text>
            </Box>

          </HStack>
          <Box marginY={3}>
            <Text fontSize='12px'  fontWeight={400}>Welcome to your Dashboard</Text>
          </Box>

        </Box>
        <SalesOverview/>
        <OtherOverviews/>
        <Box mt={4} mb={2}>
          <Flex justifyContent='center'>
            <HStack fontSize='14px' color='#919191' >
              <Box>
                <Image src='/icons/fi-rr-lock.svg' alt='lock'/>
              </Box>
              <Text>End-to-end encryption</Text>
            </HStack>
          </Flex>

        </Box>
        <Assistant/>
      
      </Box>

    </ComponentLayout>
  )
}
