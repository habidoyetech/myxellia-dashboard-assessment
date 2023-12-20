"use client"

import { Box } from '@chakra-ui/react'
import React from 'react'

const DashboardDataBox = ({children}) => {
  return (
    <Box bg='#FFFFFF' boxShadow='base' borderRadius='16px'>
        {children}
    </Box>
  )
}

export default DashboardDataBox