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
  Input,
  Button,
  Show
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import VerticalLine from "../Components/VerticalLine";
import BeveragesAndDesserts from "../menu/BeveragesAndDesserts";
import BiryaniBuckets from "../menu/BiryaniBuckets";
import BoxMeals from "../menu/BoxMeals";
import Burgers from "../menu/Burgers";
import ChickenBucket from "../menu/ChickenBucket";
import HotDeals from "../menu/HotDeals";
import HotLaunches from "../menu/HotLaunches";
import Snack from "../menu/Snack";
import {Link} from "react-scroll"

// const getData = () => {
//   return fetch(`https://vfc-database.vercel.app/products`).then((res)=> res.json())
// }

const Menu = () => {
  // const [item,SetItem] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  // const [inp,setInp] = useState("")
  // const [searchdata,setSearchData] = useState([])

  // useEffect(()=>{
  //   getdatafromback()
  // },[])

  // console.log(inp);

  // const getdatafromback = () => {
  //   setIsLoading(true)
  //    getData().then((res)=>{
  //     SetItem(res)
  //    }).catch((err)=>{
  //     console.log(err);
  //    }).finally(()=>{
  //     setIsLoading(false)
  //    })
  // } 
    // console.log(item)
  // {
  //   const lg_gye = item?.filter((el)=> ((el.name).toLowerCase()).includes(inp.toLowerCase()) )
  //      setSearchData(lg_gye)
  // }
  
  // handleSearch()
//   const handleSearch = () => {
//     console.log("aaaaaaaagaye")
//     const lg_gye = item?.filter((el) => {
//          return ((el.description
// ).toLowerCase()).includes(inp.toLowerCase()) || ((el.name
// ).toLowerCase()).includes(inp.toLowerCase())
//     })
  
//     setSearchData(lg_gye)
//     // setInp("")
          
//   }
 
  
  // console.log(searchdata);


  return (
    <Box  >
      <Grid
        gridTemplateColumns={{lg:"1fr 4fr"}}
        justifyContent="center"
        margin="auto"
       
      >
        <Hide below="lg" >
        <Box 
        // bg="yellow"
        // position="sticky"
        // top="0"
        >
         
             
            <Flex
              position={{md:"sticky",lg:"sticky"}}
              top={{md:"100px",lg:"50px",xl:"50px"}}
              left="0"
              p="50px"
              // m="auto"
              bg="white"
              gap="20px"
              // h={{base:"0px"}}
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
             
              <Box >
              
                <VerticalLine />
                <Heading mb="10px" size="lg">KFC MENU</Heading>
              
              </Box>
           
            <Link to="hotDeals" activeClass="active" duration={2000} spy={true} smooth={true}>Hot Deals</Link>
              {/* <NavLink to="#hotDeals">Hot Deals</NavLink> */}
            <Link  to="chickenBucket" activeClass="active" duration={2000} spy={true} smooth={true}>Chicken Buckets</Link>
             
              {/* <NavLink to="#chickenBucket">Chicken Buckets</NavLink> */}
            <Link to="hotLaunches" activeClass="active" duration={2000} spy={true} smooth={true}>Hot Launches</Link>
             
              {/* <NavLink to="#">Hot Launches</NavLink> */}
            <Link to="boxMeals" activeClass="active" duration={2000} spy={true} smooth={true}>Box Meals</Link>
              
              {/* <NavLink to="#">Box Meals</NavLink> */}
            <Link to="burgers" activeClass="active" duration={2000} spy={true} smooth={true}>Burgers</Link>

            <Link to="biryaniBuckets" activeClass="active" duration={2000} spy={true} smooth={true}>Biryani Buckets</Link>


              {/* <NavLink to="#">Burgers</NavLink> */}
            <Link to="snack" activeClass="active" duration={2000} spy={true} smooth={true}>Snack</Link>


              {/* <NavLink to="#">Snack</NavLink> */}
              
            <Link to="beveragesAndDesserts" activeClass="active" duration={2000} spy={true} smooth={true}>Beverages And Desserts</Link>
              {/* <NavLink to="#">Desserts</NavLink> */}
              
            </Flex>
          {/* </Box> */}
        </Box>
        </Hide>

        {/* right Box */}
        <Grid  mb="50px"  boxShadow="base"  >

          {/* search box */}
          {/* <Box m="auto" alignItems="center" display="flex" w={{base:"90%",md:"70%",lg:"50%" }}position="sticky" top="160px"  gap={5}><Input borderColor= "#e4002b" bg="white"   value={inp} onChange={(e) => setInp(e.target.value)} focusBorderColor="#e4002b"
            placeholder="search Here" />
            <Button bg="#e4002b"
            _hover={{bg:"#e4002b",color:"white"}}  color="white" onClick={handleSearch}>Search</Button>
          </Box> */}
          {/* <Box>{searchdata}</Box> */}
            
             <Box    id="hotDeals" >
                {/* <Heading  m="50px 50px"   as="h1" size="lg">HOT DEALS</Heading> */}
                <HotDeals/>
             </Box>

             <Box  id="chickenBucket" >
             {/* <Heading  m="50px 50px"   as="h1" size="lg">CHICKEN BUCKET</Heading> */}
                <ChickenBucket/>
             </Box>



             <Box  id="hotLaunches">
             {/* <Heading  m="50px 50px"   as="h1" size="lg">HOT LAUNCHES</Heading> */}
                <HotLaunches/>
             </Box>

             <Box  id="boxMeals">
             {/* <Heading  m="50px 50px"   as="h1" size="lg">BOX MEALS</Heading> */}
                <BoxMeals/>
             </Box>

             <Box  id="burgers">
             {/* <Heading  m="50px 50px"   as="h1" size="lg">BURGERS</Heading> */}
                <Burgers/>
             </Box>
             <Box  id="biryaniBuckets">
             {/* <Heading  m="50px 50px"   as="h1" size="lg">BIRYANI BUCKET</Heading> */}
                <BiryaniBuckets/>
             </Box>

             <Box  id="snack">
             {/* <Heading  m="50px 50px"   as="h1" size="lg">Snack</Heading> */}
                <Snack/>
             </Box>

             <Box  id="beveragesAndDesserts">
             {/* <Heading  m="50px 50px"   as="h1" size="lg">BEVERAGES AND DESSERTS</Heading> */}
                <BeveragesAndDesserts/>
             </Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;


