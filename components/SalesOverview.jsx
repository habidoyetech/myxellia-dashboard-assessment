"use client"

import {
    Box,
    Text,
    HStack,
    Heading,
    Flex,
    
    VStack,
    
} from '@chakra-ui/react';

import DashboardDataBox from './DashboardDataBox';
import DashboardOverview from './DashboardOverview';
import SalesOverviewChartData from './SalesOverviewChartData';

const SalesOverview = () => {
  return (
    <Box w='100%' display='flex' gap={8}>
        <HStack w='75%' >
            <DashboardDataBox>
                <Box w overflow='hidden'>
                    <Flex px={6} pt={6} pb={3} justifyContent='space-between'>
                        <Box display='flex' flexDirection='column' gap='10px'>
                        <Heading as='h4' fontWeight={600} fontSize='20px' lineHeight='25px' >Sales Overview</Heading>
                        <Text fontSize='12px' lineHeight='15px' color='#606060'>
                            Showing overview Jan 2022 - Sept 2022
                        </Text>
                        </Box>
                        <Box>
                        <Box borderRadius='12px' border='1px' borderColor='#CBCBCB' fontSize='12px' color='#CBCBCB' fontWeight={500}  paddingY='16px'paddingX='40px'  >
                            View Transaction
                        </Box>
                        </Box>
                    </Flex>

                    {/* <Box w='100%'>
                        <Tabs align='end' variant='solid-rounded' defaultIndex={2}>
                        <TabList mb={2} px={6} >
                            <Tab fontSize='14px' h='40px' color='#3d3d3d' fontWeight={400} lineHeight='17px' _selected={{bg:'#f5f5f5', borderRadius: '10px', fontWeight: '600'}} >1 Week</Tab>
                            <Tab fontSize='14px' h='40px' color='#3d3d3d' fontWeight={400} lineHeight='17px' _selected={{bg:'#f5f5f5', borderRadius: '10px', fontWeight: '600'}} >1 Month</Tab>
                            <Tab fontSize='14px' h='40px' color='#3d3d3d' fontWeight={400} lineHeight='17px' _selected={{bg:'#f5f5f5', borderRadius: '10px', fontWeight: '600'}} >1 Year</Tab>
                        </TabList>
                        <Divider borderBottomWidth='2px'/>
                        <TabPanels pl={2} justifyContent='left'>
                            <TabPanel display='flex' justifyContent='left'>
                            <Flex w='100%'> 
                                <Box display='flex' flexDir='column' justifyContent='left' flex='1' alignItems='start' >
                                
                                <Box>this</Box>
                                <Divider/>
                                </Box>
                                <Box>
                                <StatDataGroup/>
                                </Box>
                                
                            </Flex>
                            </TabPanel>
                            <TabPanel>
                            <p>two!</p>
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
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
                                        <Text color='#919191' fontSize='10px' fontWeight={500} lineHeight='12px'>Jan</Text>
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
                    </Box> */}
                    <SalesOverviewChartData/> 
                
                </Box>
                
                
            </DashboardDataBox>
        </HStack>
        <VStack w='35%' spacing={8}>
        <DashboardOverview 
            overViewName='Property Name' 
            overviewAlt='Overview Logo' 
            overviewLogo='/icons/Group.svg' 
            overviewData={[
            { value:0, type: 'Total'},
            { value:0, type: 'Available'},
            { value:0, type: 'Sold Out'},
            ]}
            width='88px'
        />
        <DashboardOverview 
            overViewName='Property Name' 
            overviewAlt='Overview Logo' 
            overviewLogo='/icons/Group.svg' 
            overviewData={[
            { value:0, type: 'Total'},
            { value:0, type: 'New'},
            { value:0, type: 'Active'},
            {value: 0, type: 'Inactive'}
            ]}
            width='66px'
        />
        </VStack>
    </Box>
  )
}

export default SalesOverview