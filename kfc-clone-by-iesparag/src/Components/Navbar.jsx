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
  //  location function
  const handleLocationState = (event) => setLocation(event.target.value);

  const handleLocationFunction = () => {
    onOpen();
  };
  // const sizes = ["full"];

  return (
    <Box >
      <Box >
        <Hide below="md">
          <Box>
            <Center>
              <Flex p="1%" gap={8} alignItems="center">
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
                    
                  >
                    {location}
                  </Button>
                ) : (
                  <Button
                  
                    bg="black"
                    color="white"
                    onClick={handleLocationFunction}
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
      <Box bg="white" boxShadow="base" p="0 10%">
        <Flex
          // bg="red"
          alignItems="center"
          h="100px"
          p="10px 20px"
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
              <Show below="md" >
                <Hide above="md">
                  <Box  >
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
                        <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
                        <DrawerBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Consequat nisl vel pretium
                            lectus quam id. Semper quis lectus nulla at volutpat
                            diam ut venenatis. Dolor morbi non arcu risus quis
                            varius quam quisque. Massa ultricies mi quis
                            hendrerit dolor magna eget est lorem. Erat imperdiet
                            sed euismod nisi porta. Lectus vestibulum mattis
                            ullamcorper velit.
                          </p>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </Box>
                </Hide>
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
