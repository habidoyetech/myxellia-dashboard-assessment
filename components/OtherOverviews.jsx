import React from 'react';
import { Box, HStack, Heading, Image, Text ,  Grid, VStack} from '@chakra-ui/react';
import DashboardDataBox from '@/components/DashboardDataBox';
import StatComponent from '@/components/StatComponent';
import TotalBalanceUnitData from '@/components/TotalBalanceUnitData';
import MostAnalysisComponent from '@/components/MostAnalysisComponent';

const OtherOverviews = () => {
  return (
    <Box mt={5} gap={5} display='flex' w='100%' flexWrap={{base: 'wrap', xl:'nowrap'}} >
      <Box w='36%' minW='435px'>
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
              <Grid paddingX={4} pb={2} mt={4} templateColumns='repeat(2, 175px)' gap={8} bg='#F5F5F5' borderRadius='12px'>
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

      </Box>
      <Box w='32%' minW='390px'>
      <DashboardDataBox>
        <Box px={4} pt={5} pb={4} w='100%' >
          <HStack justifyContent='space-between' alignItems='start'>
            <StatComponent statNumberColor='#000000' statNumberFontSize='24px' statHelpTextFontSize='12px' statHelpText='Total Outstanding Balance' >&#8358; 0.<span bg='none' style={{color: '#cbcbcb'}} >00</span></StatComponent>
            <HStack fontSize='10px' pt={3} color='#cbcbcb' cursor='pointer'>
              <Text>View all</Text>
              <Image alt='Next Image' src='/icons/nest.svg'/>
            </HStack>
          </HStack>
          <Box pt={8}>
            <TotalBalanceUnitData more={true} statNumber={true} statNumberColor='#ff6a6a' statHelpText='Total Outstanding Balance' statNumberFontSize='14px' width='80px' height='80px'>&#8358; 0.00</TotalBalanceUnitData>
          </Box>
        </Box>
      </DashboardDataBox>

      </Box>
      
      <Box w='29%' minW='320px'>
        <DashboardDataBox>
          <Box px={4} pt={4} pb={4} w='100%' >
            <StatComponent statNumberFontSize='24px' statHelpTextFontSize='12px' statLabelValue='Top Selling' statNumberColor='#000000' statHelpText='Total Sold'>&#8358; 0.<span bg='none' style={{color: '#cbcbcb'}} >00</span></StatComponent>
            <Box pt={8}>
              <TotalBalanceUnitData statNumber={true} statHelpText='Whole Unit Sales' statNumberColor='#cbcbcb' statNumberFontSize='14px' width='80px' height='80px'>0</TotalBalanceUnitData>
            </Box>

          </Box>
          
        </DashboardDataBox>

      </Box>
      
      
    </Box>
  )
}

export default OtherOverviews