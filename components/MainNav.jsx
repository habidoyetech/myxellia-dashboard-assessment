"use client"

import ComponentLayout from './ComponentLayout'
import { Box, HStack } from '@chakra-ui/react'
import NavLink from './NavLink'
import SearchInput from './SearchInput'

const MainNav = () => {

  // const navigations = [
  //   // {
  //   //   name: 'Listings',
  //   //   iconLink: ''
  //   // }
  // ]

  return (
    <ComponentLayout boxH='67px' bg='#FFFFFF' display='flex' alignItems='center' boxShadow='base'>
        <Box display='flex'  justifyContent='space-between'>
            <HStack spacing={5}>
                <NavLink textfontWeight={600} boxBg='#F5F5F5' boxBorderRadius={7} linkName='Dashboard' linkLogo='/icons/dashboard.svg' linkLogoAlt='Dashboard'/>
                <NavLink display={{ base: 'none', xl:'block'}} linkName='Listings' linkLogo='/icons/location.svg' linkLogoAlt='Listings'/>
                <NavLink display={{ base: 'none', sm:'block'}} linkName='Users' linkLogo='/icons/user.svg' linkLogoAlt='users'/>
                <NavLink display={{ base: 'none', md:'block'}} linkName='Accounts' linkLogo='/icons/wallet.svg' linkLogoAlt='Wallet'/>
                <NavLink display={{ base: 'none', lg:'block'}} linkName='Request' linkLogo='/icons/request.svg' linkLogoAlt='Request'/>
                <NavLink display={{ base: 'none', xl:'block'}} linkName='Settings' linkLogo='/icons/Setting.svg' linkLogoAlt='Setting'/>
            </HStack>
            <Box>
                <SearchInput/>
            </Box>
        </Box>
    </ComponentLayout>
  )
}

export default MainNav