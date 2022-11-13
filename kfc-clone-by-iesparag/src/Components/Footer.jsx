import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  VStack,
  Flex,
  Center,
  HStack,
  Hide
} from "@chakra-ui/react";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import fb from "../Assets/images/fb.png"
import insta from "../Assets/images/insta.png"
import twitter from "../Assets/images/twitter.png"

const Footer = () => {
  return (
    // bahar ka single box
    <Box bg="#202124" >
      <Grid
        p="6%"
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(6,1fr)",
          lg: "repeat(8,1fr)",
          
        }}
        
        gap={5}
      >
        <GridItem w="100%">
          <Image
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt="footer_logo"
          />
        </GridItem>
        <GridItem w="100%" color="#fff">
          <Text>KFC Food</Text>
          <Text>Menu</Text>
          <Text>Order Lookup</Text>
          <Text>Gift Card</Text>
          <Text>Nutrition & Allergen</Text>
        </GridItem>
        <GridItem w="100%" color="#fff">
          <Text>Support</Text>
          <Text>Get Help</Text>
          <Text>Contact Us</Text>
          <Text>VFC Feedback</Text>
          <Text>Privacy Policy</Text>
        </GridItem>
        <GridItem w="100%" color="#fff">
          <Text>Legal</Text>
          <Text>Terms and Conditions</Text>
          <Text>Privacy Policy</Text>
          <Text>Disclaimer</Text>
          <Text>Caution Notice</Text>
        </GridItem>
        <GridItem w="100%" color="#fff">
          <Text>VFC India</Text>
          <Text>About VFC</Text>
          <Text>VFC Care</Text>
          <Text>Careers</Text>
          <Text>Our Golden Past</Text>
        </GridItem>
        <GridItem w="100%" color="#fff">
          <Text>
            <LocationOnIcon style={{ color: "#e4002b" }} fontSize="small" />
            Find a VFC
          </Text>
        </GridItem>
        <Hide below="md" >
        <GridItem w="100%" color="#fff">
          <Button p=" auto 5px" border="1px solid white" bg="#202124"
          _hover={{bg:"#e4002b"}}
          >
            <Image
              bg="#202124"
              width="20%"
              src="https://cdn-icons-png.flaticon.com/512/3128/3128279.png"

            />
            playStore
          </Button>
        </GridItem>
        <GridItem w="100%" color="#fff">
          <Button border="1px solid white" bg="#202124"
          _hover={{bg:"#e4002b"}}
          >
            <Image
              width="30%"
              src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
            />
            App Store
          </Button>
        </GridItem>
        </Hide>
      </Grid>
      <Flex p="0 10%" justifyContent="space-between">
        <Box ></Box>
      <Box >
      <Center color="#fff">
        Copyright © VFC Corporation 2022 All Rights Reserved
      </Center>
      </Box>
      <Hide below="sm">
        <HStack pb="20px" spacing={5} >
          <Image border=".1px solid white" color="#fff"  borderRadius="50%" bg="#fff" src={fb} />
          <Image border=".1px solid white" color="#fff"  borderRadius="50%" bg="#fff" src={insta} />
          <Image border=".1px solid white" color="#fff"  borderRadius="50%" bg="#fff" src={twitter} />
          
        </HStack>
        </Hide>
      </Flex>
    </Box>
  );
};

export default Footer;
