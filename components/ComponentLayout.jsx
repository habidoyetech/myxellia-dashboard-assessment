import { Box, Container } from '@chakra-ui/react';
import React from 'react';


const ComponentLayout = ({children, bg, boxH, display, alignItems, justifyContent, boxShadow}) => {
  return (
    <Box w='100%' bg={bg} h={boxH} display={display} alignItems={alignItems} justifyContent={justifyContent} boxShadow={boxShadow}>
        <Container maxW='90%'>
            {children}
        </Container>
    </Box>
  )
}

export default ComponentLayout