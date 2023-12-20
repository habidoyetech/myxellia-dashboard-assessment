"use client"
import ComponentLayout from './ComponentLayout'
import { Box, HStack } from '@chakra-ui/react'
import NavLink from './NavLink'
import SearchInput from './SearchInput'

const MainNav = () => {
  return (
    <ComponentLayout boxH='67px' bg='#FFFFFF' display='flex' alignItems='center' boxShadow='base'>
        <Box display='flex'  justifyContent='space-between'>
            <HStack>
                <NavLink textfontWeight={600} boxBg='#F5F5F5' boxBorderRadius={7} linkName='Dashboard' linkLogo='/icons/dashboard.svg' linkLogoAlt='Dashboard'/>
                <NavLink linkName='Listings' linkLogo='/icons/location.svg' linkLogoAlt='Listings'/>
                <NavLink linkName='Users' linkLogo='/icons/user.svg' linkLogoAlt='users'/>
                <NavLink linkName='Accounts' linkLogo='/icons/wallet.svg' linkLogoAlt='Wallet'/>
                <NavLink linkName='Request' linkLogo='/icons/request.svg' linkLogoAlt='Request'/>
                <NavLink linkName='Settings' linkLogo='/icons/Setting.svg' linkLogoAlt='Setting'/>
            </HStack>
            <Box>
                <SearchInput/>
            </Box>
        </Box>
    </ComponentLayout>
  )
}

export default MainNav