import { fonts } from './fonts'
import './globals.css';
import { Providers } from './providers';
import { Container } from '@chakra-ui/react';


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
          <Container >
            <p>This is me</p>
            {children}
          </Container>

          
          
          
        </Providers>
      </body>
    </html>
  )
}
