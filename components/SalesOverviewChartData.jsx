import React from 'react'

import {
    Box,
    Text,
    HStack,
    
    Flex,
    Tabs,
    Tab,
    TabPanels,
    TabList,
    TabPanel,
    Image,
   
    Divider,
} from '@chakra-ui/react';
import StatDataGroup from './StatDataGroup';


const SalesOverviewChartData = () => {

    const year = ['Jan', 'Feb', 'Mar', 'April', 'Mar', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

  return (
    <Box w='100%'>
        <Tabs align='end' variant='solid-rounded' defaultIndex={2}>
            <TabList mb={2} px={6} >
                <Tab fontSize='14px' h='40px' color='#3d3d3d' fontWeight={400} lineHeight='17px' _selected={{bg:'#f5f5f5', borderRadius: '10px', fontWeight: '600'}} >1 Week</Tab>
                <Tab fontSize='14px' h='40px' color='#3d3d3d' fontWeight={400} lineHeight='17px' _selected={{bg:'#f5f5f5', borderRadius: '10px', fontWeight: '600'}} >1 Month</Tab>
                <Tab fontSize='14px' h='40px' color='#3d3d3d' fontWeight={400} lineHeight='17px' _selected={{bg:'#f5f5f5', borderRadius: '10px', fontWeight: '600'}} >1 Year</Tab>
            </TabList>
            <Divider borderBottomWidth='2px'/>
            <TabPanels pl={2} justifyContent='left'>
                <TabPanel display='flex' justifyContent='left'>
                    <Flex w='100%' gap='10px'> 
                        <Box display='flex'  justifyContent='space-between' w='50%' alignItems='start' > 
                            <Box h='100%' display='flex' alignItems='center'>
                            <Image src='/icons/arrowleft.svg' alt='Scroll left'/>
                            </Box>
                            <Box overflowX='scroll' className='example' overflowY='hidden' height='100%' display='flex' alignItems='end' >
                            <Box >
                                <Divider orderBottomWidth='2px'/>
                                    <HStack spacing={4} mt={1}>
                                        {
                                            daysInWeek.map((day, index) => {
                                                return (
                                                    <Text key={index} color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>{day}</Text>
                                                )
                                            })
                                        }
                                    </HStack>
                            </Box>
                            
                            </Box>
                            <Box h='100%' display='flex' alignItems='center' boxShadow=''>
                            <Image src='/icons/arrowright.svg' alt='Scroll left'/>
                            </Box>
                            
                        </Box>
                        <Box w='50%'>
                            <StatDataGroup/>
                        </Box>
                    
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <Flex w='100%' gap='10px'> 
                        <Box display='flex'  justifyContent='space-between' w='50%' alignItems='start' > 
                            <Box h='100%' display='flex' alignItems='center'>
                            <Image src='/icons/arrowleft.svg' alt='Scroll left'/>
                            </Box>
                            <Box overflowX='scroll' className='example' overflowY='hidden' height='100%' display='flex' alignItems='end' >
                            <Box >
                                <Divider orderBottomWidth='2px'/>
                                    <HStack spacing={4} mt={1}>
                                        {
                                            year.map((month, index) => {
                                                return (
                                                    <Text key={index} color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>{month}</Text>

                                                )
                                            })
                                        }
                                        
                                    </HStack>

                            </Box>
                            
                            </Box>
                            <Box h='100%' display='flex' alignItems='center' boxShadow=''>
                            <Image src='/icons/arrowright.svg' alt='Scroll left'/>
                            </Box>
                            
                        </Box>
                        <Box w='50%'>
                            <StatDataGroup/>
                        </Box>
                    
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <Flex w='100%' gap='10px'> 
                        <Box display='flex'  justifyContent='space-between' w='50%' alignItems='start' > 
                            <Box h='100%' display='flex' alignItems='center'>
                            <Image src='/icons/arrowleft.svg' alt='Scroll left'/>
                            </Box>
                            <Box overflowX='scroll' className='example' overflowY='hidden' height='100%' display='flex' alignItems='end' >
                            <Box >
                                <Divider orderBottomWidth='2px'/>
                                    <HStack spacing={4} mt={1}>
                                        {
                                            year.map((month, index) => {
                                                return (
                                                    <Text key={index} color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>{month}</Text>

                                                )
                                            })
                                        }
                                        
                                    </HStack>

                            </Box>
                            
                            </Box>
                            <Box h='100%' display='flex' alignItems='center' boxShadow=''>
                            <Image src='/icons/arrowright.svg' alt='Scroll left'/>
                            </Box>
                            
                        </Box>
                        <Box w='50%'>
                            <StatDataGroup/>
                        </Box>
                    
                    </Flex>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
  )
}

export default SalesOverviewChartData