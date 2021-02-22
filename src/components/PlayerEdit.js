import React, { useContext } from "react";
import { PlayerContext } from "../App";
import {
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stat,
} from "@chakra-ui/react";

import StatisticEdit from "./StatisticEdit";

// Lib for generating random unique id
import { v4 as uuidv4 } from "uuid";

export default function PlayerEdit({ player }) {
  const { handlePlayerChange, handlePlayerSelect } = useContext(PlayerContext);

  function handleChange(changes) {
    handlePlayerChange(player.id, { ...player, ...changes });
  }

  // Similar to handlePlayerChange, replace changed statistic with new one
  function handleStatisticChange(id, statistic) {
    const newStatistics = [...player.statistics];
    const index = newStatistics.findIndex((statistic) => statistic.id === id);
    newStatistics[index] = statistic;
    handleChange({ statistics: newStatistics });
  }

  // Create blank statistic
  function handleStatisticAdd() {
    const newStatistic = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ statistics: [...player.statistics, newStatistic] });
  }

  // Delete statistic by id passed
  function handleStatisticDelete(id) {
    handleChange({
      statistics: player.statistics.filter((statistic) => statistic.id !== id),
    });
  }

  return (
    <Box
      marginLeft={5}
      padding={5}
      backgroundColor="gray.50"
      className="PlayerEdit"
    >
      <Flex justifyContent="flex-end">
        <Button variant="ghost" onClick={() => handlePlayerSelect(undefined)}>
          &times;
        </Button>
      </Flex>
      <Box>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            name="name"
            id="name"
            value={player.name}
            onInput={(e) => handleChange({ name: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="nationality">Nationality</FormLabel>
          <Input
            type="text"
            name="nationality"
            id="nationality"
            value={player.nationality}
            onInput={(e) => handleChange({ nationality: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="position">Position</FormLabel>
          <Input
            type="text"
            name="position"
            id="position"
            value={player.position}
            onInput={(e) => handleChange({ position: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="clubs">Clubs</FormLabel>
          <Textarea
            name="clubs"
            id="clubs"
            value={player.clubs}
            onInput={(e) => handleChange({ clubs: e.target.value })}
          />
        </FormControl>
      </Box>
      <br />
      <FormControl>
        <FormLabel>Statistics</FormLabel>
        {player.statistics.map((statistic) => {
          return (
            <StatisticEdit
              key={statistic.id}
              statistic={statistic}
              handleStatisticChange={handleStatisticChange}
              handleStatisticDelete={handleStatisticDelete}
            />
          );
        })}
        <Flex justifyContent="center" marginTop={5}>
          <Button
            colorScheme="blue"
            onClick={() => {
              handleStatisticAdd();
            }}
          >
            Add Statistic
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}
