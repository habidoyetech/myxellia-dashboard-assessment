"use client"

import React from 'react';
import {
    Box, Divider, Text
} from '@chakra-ui/react'
import TotalBalanceUnitData from './TotalBalanceUnitData';

const MostAnalysisComponent = ({mostName, balanceUnitImageBorderColor}) => {
  return (
    <Box mt={5}>
        <Box>
            <Text fontSize='10px' color='#191919' fontWeight={400} lineHeight='12px'>{mostName}</Text>
        </Box>
        <Divider/>
        <Box mt={2} >
          <TotalBalanceUnitData balanceUnitImageBorderColor={balanceUnitImageBorderColor} headingFontsize='16px' balanceUnitImagePadding={5} width='30px' height='30px'/>   
        </Box>
    </Box>
  )
}

export default MostAnalysisComponent