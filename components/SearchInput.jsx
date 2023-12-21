"use client"

import { Input, InputGroup, IconButton, InputRightElement } from '@chakra-ui/react';
import SearchIcon from './SearchIcon';
import React from 'react'

const SearchInput = () => {
  return (
    <InputGroup>
        <Input type='text' borderRadius='12px' placeholder='Search... properties, customer here' bg='#F5F5F5' border='1px' fontSize='13px' fontWeight={300} lineHeight='15.22px' borderColor='#E4E4E4' focusBorderColor='#E4E4E4'/>
        <InputRightElement>
            <IconButton aria-label='Search database' bg='transparent' _hover={{backgroundColor: 'transparent'}} icon={<SearchIcon/>} />
        </InputRightElement>
        
    </InputGroup>
  )
}

export default SearchInput