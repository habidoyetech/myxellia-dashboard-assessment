'use client'

import React from 'react'
import {
    Box, HStack, Heading, Image, VStack, Text
} from '@chakra-ui/react'
import BalanceUnitImage from './BalanceUnitImage'
import StatComponent from './StatComponent'

const TotalBalanceUnitData = ({width, balanceUnitImageBorderColor, balanceUnitImagePadding, height, headingFontsize = '20px', statNumberColor, statNumber, statHelpText, statNumberFontSize, more}) => {
  return (
    <Box>
        <HStack gap={4} alignItems='start'>
            <Box>
                <BalanceUnitImage borderColor={balanceUnitImageBorderColor} padding={balanceUnitImagePadding} width={width} height={height}/>
            </Box>
            <VStack flex={1} alignItems='flex-start' gap={4} justifyContent='start' >
                <Heading alignSelf='start' as='h2' fontWeight={600} fontSize={headingFontsize} color='#191919'>None</Heading>
                {statNumber && <StatComponent statNumberColor={statNumberColor} statHelpText={statHelpText} statNumberFontSize={statNumberFontSize} />}
                <Box alignSelf='end'>
                    { more &&
                        <HStack fontSize='12px' color='#606060' justifyContent='end' w='100%'>
                            <Text>1/5</Text>
                            <Image  src='/icons/arrowleft.svg' w={7} align='Left Arrow'/>
                            <Image src='/icons/arrowright.svg' w={7} align='Righ Arrow'/>
                        </HStack>
                        
                    }
                </Box>
            </VStack>
        </HStack>
    </Box>
  )
}

export default TotalBalanceUnitData