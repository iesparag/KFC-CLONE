import { Box, Grid } from '@chakra-ui/react';
import React from 'react'
import { useLocation } from 'react-router-dom';
import SingleCard from '../menu/SingleCard';

const SearchPage = () => {
    const { state } = useLocation();
    console.log(state.lg_gye)
  return (
      <Box pt={{ base: "10px", md: "100px" }}>
          <Grid
        // pt={{base:"100px",md:"200px"}}
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
        }}
        m="auto auto"
        // width="80%"
        p="0 10%"
        gap={5}
      >
        {
        state.lg_gye?.map((item) => (
          <SingleCard key={item.id} {...item} />
         
        ))}
      </Grid>
      <Box h="40px"></Box>
    </Box>
  )
}

export default SearchPage