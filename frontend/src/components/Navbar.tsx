import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          <NavLink to="/">Products Store</NavLink>
        </Text>
        <HStack alignItems={"center"}>
          <NavLink to="/create">
            <Button>
              <LuPlus size={20} />
              Create Product
            </Button>
          </NavLink>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
