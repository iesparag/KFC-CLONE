import { Box,GridItem, Image } from '@chakra-ui/react'
import React from 'react'

const SingleCard = () => {     


  
  return (
    <Box   bg="red" w="200px" h="200px">
      <GridItem>
         <Box><Image/></Box>
         <Box></Box>
      </GridItem>
    </Box>
  )
}

export default SingleCard