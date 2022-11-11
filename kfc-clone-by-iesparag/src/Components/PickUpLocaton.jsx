import React from 'react'
import {Box,Center,Button} from "@chakra-ui/react"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const PickUpLocaton = () => {
  return (
    <Box padding="20px" bg="black">
          <Center gap={10} color="white">
            <Box>
              <LocationOnIcon style={{ color: "#e4002b" }} fontSize="small" />
              Pick up from: KFC DB City Mall, Bhopal
            </Box>
            <Box>
              <AccessTimeIcon style={{ color: "#e4002b" }} fontSize="small" />
              ASAP{" "}
            </Box>
            <Button
              color="white"
              border="white"
              _hover={{ bg: "#e4002b" }}
              bg="#e4002b"
            >
              Change
            </Button>
          </Center>
        </Box>
  )
}

export default PickUpLocaton;