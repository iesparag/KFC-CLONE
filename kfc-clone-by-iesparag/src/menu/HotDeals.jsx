import { Box, Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import loader_gif from "../Assets/images/loader_gif.gif";
import SingleCard from "./SingleCard";

const dealDataFromApi = () => {
  return fetch(`https://vfc-database.vercel.app/products?cate=hotDeals`).then((res) =>
    res.json()
  );
};

const HotDeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dealdata, setDealData] = useState([]);

  useEffect(() => {
    getdatafromProductsDeal();
  }, []);

  const getdatafromProductsDeal = () => {
    setIsLoading(true);
    setIsError(false);
    dealDataFromApi()
      .then((res) => {
        setDealData(res);
       
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <Center>
        <Image z-index="5" src={loader_gif} />
      </Center>
    );
  }

  return (
    <Box pt={{ base: "10px", md: "100px" }}>
      <Heading  m="10px 50px 20px"   as="h1" size="lg">HOT DEALS</Heading>
      <Grid
        // textAlign="center"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
        }}
        m="auto auto"
        // width="80%"
        p="0 10%"
        gap={5}
      >
        {
        dealdata?.map((item) => (
          <SingleCard key={item.id} {...item} />
         
        ))}
      </Grid>
      <Box h="40px"></Box>
    </Box>
  );
};

export default HotDeals;
