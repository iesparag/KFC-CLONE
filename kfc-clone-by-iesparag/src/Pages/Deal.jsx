import { Box, Image,Center,Heading,Text,Flex,Grid,GridItem} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PickUpLocaton from "../Components/PickUpLocaton";
import loader_gif from "../Assets/images/loader_gif.gif";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
// import SingleCard from "../Components/SingleCard";


const dealDataFromApi = () => {
  return fetch(`https://vfc-database.vercel.app/products?cate=hotDeals`).then((res) => res.json());
};



const Deal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dealdata,setDealData] = useState([])


  useEffect(() => {
    getdatafromProductsDeal();
  }, []);

  const getdatafromProductsDeal = () => {
    setIsLoading(true);
    setIsError(false);
    dealDataFromApi()
      .then((res) => {
        
        setDealData(res)
          console.log(res)
        
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
        <Image bg="#fff" z-index="100" src={loader_gif} />
      </Center>
    );
  }

  return (
    <Box>
      <Box>
        <PickUpLocaton />
        <Image src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1708&fit=fill&fm=webp" />
      </Box>
      <Box >
        <Flex p="5% 10%" alignItems="center" justifyContent="space-between" >
          <Heading as="h1" size="lg">OFFERS FOR YOU</Heading>
          <NavLink to="/login" >Sign In to see exclusive offers & deals</NavLink>
        </Flex>
      </Box>
      <Grid textAlign="center"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        m="auto auto"
        // width="80%"
        p="0 10%"
        gap={5}  >
        {
          dealdata?.map((item)=>(
            <GridItem justifyContent="center"   m="auto auto" borderRadius="8px" key={item.id} w="90%" boxShadow="base">
            <Link to="/menu" >
              <Image src={item.images} w="100%" borderRadius="8px 8px 0 0"   />
              <Heading m="15px auto" size="sm">
                {item.name}
              </Heading>
            </Link>
          </GridItem>
          ))
        }
      </Grid>
      <Box h="40px" ></Box>

    </Box>
  );
};

export default Deal;
