import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Center,
  Stack,
  Hide,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import VerticalLine from "../Components/VerticalLine";
import HotDeals from "../menu/HotDeals";

const Menu = () => {
  return (
    <Box>
      <Grid
        gridTemplateColumns={{lg:"1fr 4fr"}}
        justifyContent="center"
        margin="auto"
       
      >
        <Box 
        // bg="yellow"
        // position="sticky"
        // top="0"
        >
         
            
            <Flex
              position={{base:"fixed",md:"fixed",lg:"sticky"}}
              top={{base:"100px",md:"100px",lg:"100px",xl:"100px"}}
              left="0"
              p="50px"
              // m="auto"
              bg="white"
              gap="20px"
              // mt={{md:"0px"}}
              justifyContent="center"
              alignItems="start"
              flexDir={{ lg: "column", sm: "row", md: "row" }}
              // flexDirection="column"
              // h={{ sm: "10vh", lg: "70vh", md: "70vh" }}
             flexWrap="wrap"
             margin="auto"
             width={{base:"100%",md:"100%"}}
              
            >
              <Hide below="md">
              <Box >
              
                <VerticalLine />
                <Heading mb="10px" size="lg">KFC MENU</Heading>
              
              </Box>
            </Hide>
            <a href="#hotDeals">Hot Deals</a>
              {/* <NavLink to="#hotDeals">Hot Deals</NavLink> */}
            <a  href="#chickenBucket">Chicken Buckets</a>
             
              {/* <NavLink to="#chickenBucket">Chicken Buckets</NavLink> */}
            <a href="#hotLaunches">Hot Launches</a>
             
              {/* <NavLink to="#">Hot Launches</NavLink> */}
            <a href="#boxMeals">Box Meals</a>
              
              {/* <NavLink to="#">Box Meals</NavLink> */}
            <a href="#burgers">Burgers</a>


              {/* <NavLink to="#">Burgers</NavLink> */}
            <a href="#snack">Snack</a>


              {/* <NavLink to="#">Snack</NavLink> */}
              
            <a href="#beveragesAndDesserts">Desserts</a>
              {/* <NavLink to="#">Desserts</NavLink> */}
            </Flex>
          {/* </Box> */}
        </Box>

        {/* right Box */}
        <Grid   >
             <Box h="200px"></Box>
             
             <Box   id="hotDeals" >
                <Heading   as="h1" size="lg">HOT DEALS</Heading>
                <HotDeals/>
             </Box>

             <Box id="chickenBucket" >
             <Heading   as="h1" size="lg">HOT DEALS</Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum excepturi rem pariatur unde ducimus obcaecati natus illo deleniti veritatis ex quibusdam dolore autem consectetur, corrupti aperiam nihil officiis accusantium quidem enim beatae ipsa. Suscipit, fuga tenetur distinctio, ipsa, cupiditate aliquam excepturi alias omnis natus iusto obcaecati asperiores deserunt? Illum laborum nisi sit amet ex nihil maiores, minus tenetur atque nemo incidunt fugit voluptas inventore doloremque autem reprehenderit deserunt? Adipisci ad debitis magni error blanditiis odit rem sit delectus id, atque nobis aliquam inventore possimus ratione praesentium, quia provident similique nihil tenetur animi commodi corrupti sunt. Iusto adipisci odit doloremque delectus autem obcaecati voluptatum illo maiores. Tempora hic quasi alias sit cum aliquid. Odit expedita labore nihil reiciendis incidunt vitae quam facere alias dicta iusto autem impedit ex iste doloribus magni blanditiis officiis fugiat, tempore nemo ab ullam dignissimos. Sunt maiores vitae architecto, asperiores quisquam hic, similique doloribus repudiandae impedit sed saepe. Cupiditate sunt sint, recusandae, voluptatem totam sapiente ratione veniam libero ipsum tempore laborum minus eaque id commodi ipsa assumenda eos laboriosam nam error? Exercitationem dolorum earum ipsa perferendis voluptatum hic nam, omnis aliquid fugit, non, doloribus voluptatem magni? Minima officia et ullam maiores dolorem eos doloribus temporibus consequuntur.</Box>



             <Box id="hotLaunches">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo nisi vero fugit, nam voluptatem aspernatur cumque perferendis veniam accusantium impedit, temporibus sed voluptas necessitatibus. Quis veritatis tempora nostrum, doloribus laboriosam eum mollitia assumenda hic. Reiciendis inventore ad eius recusandae quibusdam cum deleniti mollitia assumenda totam! Est pariatur ea laudantium corporis perferendis, magni modi sunt optio. Excepturi, eligendi. Voluptates, harum voluptatem reprehenderit, minus natus cum delectus repellendus eius nihil esse, ullam laudantium. A laudantium deserunt ullam voluptatem iste possimus atque, fugiat eaque dignissimos veniam sit tempora um, facilis accusantium vitae architecto numquam iusto possimus earum?</Box>

             <Box id="beveragesAndDesserts">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro commodi, recusandae nisi, harum alias autem earum nobis omnis, eligendi aspernatur labore saepe mollitia adipisci illum dignissimos officia repellat dolores enim pariatur illo. Placeat dignissimos ipsam perferendis facilis voluptas iure commodi, sit obcaecati autem esse fugit modi doloremque? Eveniet magni, modi laudantium illo enim quasi vitae ratione, dolorum laborum doloribus dolore, quae libero voluptate! Perferendis repellat, modi nisi esse, non laboriosam omnis eveniet nesciunt, facere eum adipisci asperiores repellendus quisquam exercitationem eius earum iusto illo. Assumenda necessitatibus illo voluptatibus quis quia corporis labore aperiam veniam cumque? Odio quisquam commodi sapiente odit, </Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;

// <Hide below="md">
// <Box>
//   <Center>
//     <Heading size="lg">KFC MENU</Heading>
//   </Center>
// </Box>
// </Hide>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Hot Deals</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Chicken Buckets</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Hot Launches</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Box Meals</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Burgers</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Snack</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Beverages and Desserts</NavLink>
// </Center>
// </Box>
// </Stack>
// </Box>
