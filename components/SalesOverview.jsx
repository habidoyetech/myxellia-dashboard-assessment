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
    <Box w='100%' display='flex' flexDir={{base: 'column' , lg: 'row'}} gap={8}>
        <HStack  minW='600px' w={{base: '100%', lg:'75%'}} >
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
                    <SalesOverviewChartData/> 
                
                </Box>
                
                
            </DashboardDataBox>
        </HStack>
        <VStack flexDir={{base: 'column' , md: 'row', lg: 'column'}}  w={{base: '100%', lg:'35%'}} spacing={8}>
            <DashboardOverview 
                overViewName='Property Name' 
                overviewAlt='Overview Logo' 
                overviewLogo='/icons/Group.svg' 
                overviewData={[
                { value:0, type: 'Total'},
                { value:0, type: 'Available'},
                { value:0, type: 'Sold Out'},
                ]}
                width='100px'
            />
            <DashboardOverview 
                overViewName='Customer Overview' 
                overviewAlt='Overview Logo' 
                overviewLogo='/icons/Profile.svg' 
                overviewData={[
                { value:0, type: 'Total'},
                { value:0, type: 'New'},
                { value:0, type: 'Active'},
                {value: 0, type: 'Inactive'}
                ]}
                width='72px'
            />
        </VStack>
    </Box>
  )
}

export default SalesOverview