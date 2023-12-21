"use client"

import ComponentLayout from '@/components/ComponentLayout';
import { Box, HStack, Heading, Image, Text , Flex, Divider, Tabs, TabList, TabPanel, TabPanels, Tab, Grid, VStack} from '@chakra-ui/react';
import DashboardDataBox from '@/components/DashboardDataBox';
import StatComponent from '@/components/StatComponent';
import StatDataGroup from '@/components/StatDataGroup';
import './globals.css'
import DashboardOverview from '@/components/DashboardOverview';
import TotalBalanceUnitData from '@/components/TotalBalanceUnitData';
import MostAnalysisComponent from '@/components/MostAnalysisComponent';


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
        <Box display='flex' gap={4}>
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
          <VStack spacing={8}>
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
        <Box mt={5} gap={5} display='flex' w='100%'>
          <DashboardDataBox>
            <Box p={4}>
              <Box>
                <Heading as='h4' fontWeight={600} fontSize='20px' lineHeight='25px' >Listing Overview</Heading>
              </Box>
              <Box >
                <Grid templateColumns='repeat(2, 180px)' gap={8}>
                  <MostAnalysisComponent balanceUnitImageBorderColor='#12d8a0' mostName='Most Viewed'/>
                  <MostAnalysisComponent balanceUnitImageBorderColor='#4545fe' mostName='Most Viewed'/>
                </Grid>
                <Grid paddingX={4} pb={4} mt={8} templateColumns='repeat(2, 175px)' gap={8} bg='#F5F5F5' borderRadius='12px'>
                  <MostAnalysisComponent balanceUnitImageBorderColor='#ff9103' mostName='Most watchlisted'/>
                  <Box pt={8} >
                    <HStack  alignItems='flex-start' gap={6}  bg='white' borderRadius='12px' pt={4} pb={2} px={2} border='1px' borderColor='#E4E4E4'>
                      <VStack gap={3} justifyContent='left' alignItems='flex-start'>
                        <Heading color='#191919' fontSize='24px' fontWeight={400} lineHeight='30px'>
                          0
                        </Heading>
                        <Text color='#3d3d3d' fontSize='10px' lineHeight='12px'>Number of watchlists</Text>

                      </VStack>
                      
                      <Box>
                        <Image src='/icons/Bookmark.svg' alt='Bookmark Logo'/>
                      </Box>
                      
                    </HStack>
                  </Box>
                </Grid>
              </Box>
            </Box>  

          </DashboardDataBox>
          <DashboardDataBox>
            <Box px={4} pt={8} w='350px'>
              <HStack justifyContent='space-between' alignItems='start'>
                <StatComponent statNumberColor='#000000' statNumberFontSize='24px' statHelpTextFontSize='12px' statHelpText='Total Outstanding Balance' />
                <HStack fontSize='10px' pt={3} color='#cbcbcb' cursor='pointer'>
                  <Text>View all</Text>
                  <Image alt='Next Image' src='/icons/nest.svg'/>
                </HStack>
              </HStack>
              <Box pt={8}>
                <TotalBalanceUnitData more={true} statNumber={true} statNumberColor='#ff6a6a' statHelpText='Total Outstanding Balance' statNumberFontSize='14px' width='80px' height='80px'/>
              </Box>
            </Box>
          </DashboardDataBox>
          <DashboardDataBox>
            <Box px={4} pt={8} w='350px'>
              <StatComponent statNumberFontSize='24px' statHelpTextFontSize='12px' statLabelValue='Top Selling' statNumberColor='#000000' statHelpText='Total Sold'/>
              <Box pt={8}>
                <TotalBalanceUnitData statNumber={true} statNumberColor='#ff6a6a' statHelpText='Whole Unit Sales' statNumberFontSize='14px' width='80px' height='80px'/>
              </Box>
            </Box>
            
          </DashboardDataBox>
          
        </Box>
      
      </Box>

    </ComponentLayout>
  )
}
