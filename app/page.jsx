"use client"

import { Link } from '@chakra-ui/next-js'
import ComponentLayout from '@/components/ComponentLayout';
import { Box, HStack, Heading, Image, Text , Flex, Button, Divider, Tabs, TabList, TabPanel, TabPanels, Tab, Grid} from '@chakra-ui/react';
import DashboardDataBox from '@/components/DashboardDataBox';
import MyLineChart from '@/components/MyLineChart';
import MyChart from '@/components/MyLineChart';
import StatComponent from '@/components/StatComponent';
import StatDataGroup from '@/components/StatDataGroup';
import './globals.css'


export default function Home() {
  return (
    <ComponentLayout >
      <Box py={['30px', '40px']}>
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
        <Box>
          <HStack>
            <DashboardDataBox>
              <Box  w='856px' overflow='hidden'>
                <Flex p={6} justifyContent='space-between'>
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
                            <Box display='flex'  justifyContent='space-between' flex='1' alignItems='start' >
                              
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
                            <Box>
                              <StatDataGroup/>
                            </Box>
                            
                          </Flex>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
                
              </Box>
              
              
            </DashboardDataBox>
          </HStack>

        </Box>
        
      </Box>

    </ComponentLayout>
  )
}
