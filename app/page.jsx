"use client"

import ComponentLayout from '@/components/ComponentLayout';
import { Box, HStack, Heading, Image, Text ,  Grid, VStack} from '@chakra-ui/react';
import DashboardDataBox from '@/components/DashboardDataBox';
import StatComponent from '@/components/StatComponent';

import './globals.css'

import TotalBalanceUnitData from '@/components/TotalBalanceUnitData';
import MostAnalysisComponent from '@/components/MostAnalysisComponent';
import SalesOverview from '@/components/SalesOverview';


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
        <SalesOverview/>
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
