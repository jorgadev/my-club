import React, { useContext } from "react";
import { PlayerContext } from "../App";
import { Box, Button, Flex } from "@chakra-ui/react";

import Player from "./Player";

export default function PlayerList({ players }) {
  const { handlePlayerAdd } = useContext(PlayerContext);

  return (
    <Box className="PlayerList">
      <Box className="player-list-wrapper">
        {players.map((player) => {
          return <Player key={player.id} {...player} />;
        })}
      </Box>
      <Flex justifyContent="center" marginTop={5}>
        <Button colorScheme="blue" onClick={handlePlayerAdd}>
          Add Player
        </Button>
      </Flex>
    </Box>
  );
}
