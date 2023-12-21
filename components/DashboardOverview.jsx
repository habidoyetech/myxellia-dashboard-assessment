"use client"

import React from 'react'
import DashboardDataBox from './DashboardDataBox'
import OverviewHead from './OverviewHead'
import { Box, HStack, Image, Text } from '@chakra-ui/react'
import OverviewBoxData from './OverviewBoxData'

const DashboardOverview = ({overviewLogo, overviewAlt, overViewName, overviewData, width}) => {
  return (
    <DashboardDataBox>
      <Box p={3}>
        <Box display='flex' justifyContent='space-between' mb={3}>
          <OverviewHead overViewName={overViewName} overviewLogo={overviewLogo} overviewAlt={overviewAlt}/>
          <HStack fontSize='10px' color='#cbcbcb' cursor='pointer'>
            <Text>View all</Text>
            <Image alt='Next Image' src='/icons/nest.svg'/>
          </HStack>
        </Box>
        
        <HStack>
            {
              overviewData.map((data, index) => {
                return (
                  <OverviewBoxData key={index} value={data.value} type={data.type} width={width}/>
                )
              })
            }
            
        </HStack>

      </Box>
        

    </DashboardDataBox>
  )
}

export default DashboardOverview