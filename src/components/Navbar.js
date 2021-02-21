import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <Flex justifyContent="center" alignItems="center" p={5} boxShadow="md">
      {/* <Image src={logo} width="150px" /> */}
      <Heading>My Club</Heading>
    </Flex>
  );
}
