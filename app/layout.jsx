import { fonts } from './fonts'
import './globals.css';
import { Providers } from './providers';
import { Box } from '@chakra-ui/react';
import Nav from '@/components/Nav';


export const metadata = {
  title: 'MYXELLIA DASHBOARD ASSESSMENT',
  description: 'Frontend Developer Role Assessment by Myxellia',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en' className={fonts.poppins.variable}>
      <body >
        <Providers>
          <Box bg='#FBFCFC' overflowX='hidden'>
            <Nav/>

            {children}

          </Box> 
        </Providers>
      </body>
    </html>
  )
}
