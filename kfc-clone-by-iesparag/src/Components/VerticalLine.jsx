import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const VerticalLine = () => {
  return (
    <Flex gap={2} h="50px">
      <Box w="6px" h="20px" bg="#e4002b"></Box>
      <Box w="6px" h="20px" bg="#e4002b"></Box>
      <Box w="6px" h="20px" bg="#e4002b"></Box>
    </Flex>
  );
};

export default VerticalLine;
