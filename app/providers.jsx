// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

export const theme = extendTheme({
  
    fonts: {
      heading: `'Poppins'`,
      body: `'Poppins'`,
    }
  
});


export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}