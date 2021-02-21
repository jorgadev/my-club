import React, { useContext } from "react";
import Player from "./Player";
import { PlayerContext } from "../App";

import { Box, Button, Flex } from "@chakra-ui/react";

export default function PlayerList({ players }) {
  const { handlePlayerAdd, handlePlayerDelete } = useContext(PlayerContext);

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
