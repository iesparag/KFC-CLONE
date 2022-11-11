import React, { useState } from "react";
import "./Navbar.css";
import {
  Box,
  Image,
  Flex,
  Grid,
  Spacer,
  HStack,
  StackDivider,
  Show,
  Hide,
  Center,
  Heading,
  Text,
  Wrap,
  Stack,
  Input,
  VStack,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import vfc_logo from "../Assets/images/vfc_logo.png";
import { NavLink, Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const [location, setLocation] = useState("");

  // side hamburger function
  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };
  //  location function
  const handleLocationState = (event) => setLocation(event.target.value);

  const handleLocationFunction = () => {
    onOpen();
  };
  // const sizes = ["full"];

  return (
    <Box zIndex={1000}  boxShadow="base" position="sticky" top="0"  >
      <Box>
        <Hide below="md">
          <Box bg="#fff" boxShadow="base">
            <Center>
              <Flex p="5px 1% 0" gap={8} alignItems="center">
                <Text>
                  <LocationOnIcon
                    style={{ color: "#e4002b" }}
                    fontSize="small"
                  />
                  Allow location access for local store menu and promos
                </Text>
                {location ? (
                  <Button
                    onClick={handleLocationFunction}
                    bg="black"
                    color="red"
                    _hover={{bg:"#e4002b",color:"white"}}
                  >
                    {location}
                  </Button>
                ) : (
                  <Button
                    bg="black"
                    color="white"
                    onClick={handleLocationFunction}
                    _hover={{bg:"#e4002b",color:"white"}}
                  >
                    Set Location
                  </Button>
                )}
              </Flex>
            </Center>
          </Box>

          <Modal isOpen={isOpen} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <b>Enter Your Location</b>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack>
                  <Input
                    value={location}
                    onChange={handleLocationState}
                    placeholder="Enter Your Location"
                    size="sm"
                  />
                  <Button onClick={onClose}>Submit</Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Hide>
      </Box>
      <Box  bg="white"  p="0 3%">
        <Flex
          // bg="red"
          alignItems="center"
          h="100px"
          p="5px 20px"
          bg="whiteAlpha.900"
          m="0 0"
        >
          <Box>
            <Flex gap={8} alignItems="center">
              <Show above="md">
                <Hide below="md">
                  <NavLink to="/">
                    <Image width="100px" src={vfc_logo} />
                  </NavLink>
                  <NavLink to="/menu">
                    <b fo>Menu</b>
                  </NavLink>
                  <NavLink to="/deals">
                    <b>Deals</b>
                  </NavLink>
                </Hide>
              </Show>
              {/* for small size ... hamburger and all side drawer functionality */}
              {/* hamburger start  */}
              <Show below="md">
                {/* <Hide above="md"> */}
                  <Box>
                    <button onClick={() => handleClick(size)} key={size} m={4}>
                      {<HamburgerIcon boxSize="1.5em" />}
                    </button>
                    <Drawer
                      placement={placement}
                      onClose={onClose}
                      isOpen={isOpen}
                      size={size}
                    >
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader
                          m="-10px 0"
                          alignItems="center"
                          boxShadow="base"
                        >
                          <Box onClick={onClose}>
                            <NavLink to="/">
                              <Image bg="red" width="80px" src={vfc_logo} />
                            </NavLink>
                          </Box>
                          {/* {`${size} drawer contents`} */}
                        </DrawerHeader>
                        <DrawerBody>
                          <Box>
                            <Box pt="30px">
                              <Heading>LET'S GET</Heading>
                              <Heading>COOKIN'</Heading>
                            </Box>
                            <Box onClick={onClose}>
                              <NavLink to="/login">
                                <Heading as="h4" size="md" mt="10px">
                                  <AccountCircleRoundedIcon />
                                  Sign in / Sign up &#x2192;
                                </Heading>
                              </NavLink>
                            </Box>

                            <Box
                              onClick={onClose}
                              boxShadow="base"
                              p="5%"
                              margin="40px auto"
                            >
                              <NavLink to="/menu">
                                <Flex
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Heading size="sm">MENU</Heading>
                                  <Box w="250px" >
                                    <Image borderRadius="8px"
                                      src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/L-404140.jpg?ver=22.01"
                                      alt="cate"
                                    />
                                  </Box>
                                </Flex>
                              </NavLink>
                            </Box>
                            <Box
                              onClick={onClose}
                              boxShadow="base"
                              p="5%"
                              margin="40px auto"
                            >
                              <NavLink to="/deals">
                                <Flex
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Heading size="sm">DEALS</Heading>
                                  <Box w="250px">
                                    <Image borderRadius="8px"
                                      src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/L-8000240.jpg?ver=22.01"
                                      alt="cate"
                                    />
                                  </Box>
                                </Flex>
                              </NavLink>
                            </Box>
                            <Box
                              onClick={onClose}
                              boxShadow="base"
                              p="5%"
                              margin="40px auto"
                            >
                              <VStack
                                divider={
                                  <StackDivider borderColor="gray.200" />
                                }
                                spacing={4}
                                align="stretch"
                              >
                                <Box h="40px" >
                                  Get Help
                                </Box>
                                <Box h="40px" >
                                  Contact Us
                                </Box>
                                <Box h="40px" >
                                  VFC Feedback 
                                </Box>
                                <Box h="40px" >
                                  Privacy Policy 
                                </Box>
                              </VStack>
                            </Box>
                          </Box>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </Box>
                {/* </Hide> */}
              </Show>
              {/* hamburger end */}
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Show below="md">
              <Hide above="md" below="sm">
                <NavLink to="/">
                  <Image width="100px" src={vfc_logo} />
                </NavLink>
              </Hide>
            </Show>
          </Box>
          <Spacer />
          <Box>
            <Flex gap={8} alignItems="center">
              <Hide below="md">
                <NavLink to="/login">
                  <Flex alignItems="center" gap={3}>
                    <Image src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" />
                    <b>Sign In</b>
                  </Flex>
                </NavLink>
              </Hide>

              <NavLink to="/cart">
                <Flex alignItems="center" gap={3}>
                  <Image
                    width="50px"
                    src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  />
                  <b>₹0</b>
                </Flex>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
