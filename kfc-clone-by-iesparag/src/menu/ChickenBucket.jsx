import { Box, Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import loader_gif from "../Assets/images/loader_gif.gif";
import SingleCard from "./SingleCard";

const dealDataFromApi = () => {
  return fetch(`https://vfc-database.vercel.app/products?cate=chickenBucket`).then((res) =>
    res.json()
  );
};



const ChickenBucket = () => {

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
             <Heading  m="10px 50px 20px"   as="h1" size="lg">CHICKEN BUCKET</Heading>

      <Grid
        // textAlign="center"
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
        dealdata?.map((item) => (
          <SingleCard key={item.id} {...item} />
          //   <GridItem justifyContent="center"   m="auto auto" borderRadius="8px" key={item.id} w="90%" boxShadow="base">
          //   {/* <Link to="/menu" > */}
          //     <Image src={item.images} w="100%" borderRadius="8px 8px 0 0"   />
          //     <Heading m="15px auto" size="sm">
          //       {item.name}
          //     </Heading>
          //   {/* </Link> */}
          // </GridItem>
        ))}
      </Grid>
      <Box h="40px"></Box>
    </Box>
  )
}

export default ChickenBucket