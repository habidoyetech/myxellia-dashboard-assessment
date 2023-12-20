import { fonts } from './fonts'
import './globals.css';
import { Providers } from './providers';
import { Container, Box } from '@chakra-ui/react';
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
          <Box bg='#FBFCFC' w='100vw' minH='100vh'>
            <Nav/>

            {children}

          </Box> 
        </Providers>
      </body>
    </html>
  )
}
