import React from "react";

import { Flex } from "@chakra-ui/react";

export default function Statistic({ name, amount }) {
  return (
    <Flex paddingLeft={5}>
      <span style={{ width: "150px" }}>{name}</span>
      <span>{amount}</span>
    </Flex>
  );
}
