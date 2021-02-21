import React, { useContext, useEffect } from "react";
import StatisticList from "./StatisticList";
import { PlayerContext } from "../App";

import { Box, Flex, Heading, Button } from "@chakra-ui/react";

export default function Player(props) {
  const { handlePlayerDelete, handlePlayerSelect } = useContext(PlayerContext);
  const { id, name, nationality, position, clubs, statistics } = props;

  return (
    <Box backgroundColor="gray.50" marginBottom={2.5} p={5}>
      <Flex justifyContent="space-between" alignItems="center" marginBottom={5}>
        <Heading isTruncated>{name}</Heading>
        <Flex>
          <Button colorScheme="blue" onClick={() => handlePlayerSelect(id)}>
            Edit
          </Button>
          <Button
            colorScheme="red"
            marginLeft={2.5}
            onClick={() => handlePlayerDelete(id)}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
      <Box>
        <strong>Nationality: </strong>
        <span>{nationality}</span>
      </Box>
      <Box>
        <strong>Position: </strong>
        <span>{position}</span>
      </Box>
      <Box>
        <strong>Clubs: </strong>
        <Box paddingLeft={5} style={{ whiteSpace: "pre-wrap" }}>
          {clubs}
        </Box>
      </Box>
      <Box>
        <strong>Statistics: </strong>
        <StatisticList statistics={statistics} />
      </Box>
    </Box>
  );
}
