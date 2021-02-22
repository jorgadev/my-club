import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex justifyContent="center" alignItems="center" p={5} boxShadow="md">
      {/* <Image src={logo} width="150px" /> */}
      <Heading>My Club</Heading>
    </Flex>
  );
}
