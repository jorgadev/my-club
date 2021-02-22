import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";

import "./App.scss";
import PlayerList from "./components/PlayerList";
import PlayerEdit from "./components/PlayerEdit";
import Navbar from "./components/Navbar";
import { samplePlayers } from "./sample-players";

// Library for generating random unique ids
import { v4 as uuidv4 } from "uuid";

export const PlayerContext = React.createContext();

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState();
  const [players, setPlayers] = useState(samplePlayers);

  // Get a player with selected id
  const selectedPlayer = players.find(
    (player) => player.id === selectedPlayerId
  );

  // On first render set players to players from LS, otherwise set them to samplePlayers
  useEffect(() => {
    const playersJSON = localStorage.getItem("players");
    if (playersJSON != null) {
      setPlayers(JSON.parse(playersJSON));
    }
  }, []);

  // On first render and when players change, set them to LS
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  // Declare functions for CRUD operations with players, pass them to context
  const playerContextValue = {
    handlePlayerAdd,
    handlePlayerDelete,
    handlePlayerSelect,
    handlePlayerChange,
  };

  // Add blank player and select him
  function handlePlayerAdd() {
    const newPlayer = {
      id: uuidv4(),
      name: "",
      nationality: "",
      position: "",
      clubs: "",
      statistics: [{ id: uuidv4(), name: "", amount: "" }],
    };
    setSelectedPlayerId(newPlayer.id);
    setPlayers([...players, newPlayer]);
  }

  // Change player after editing
  function handlePlayerChange(id, player) {
    const newPlayers = [...players];
    const index = newPlayers.findIndex((player) => player.id === id);
    newPlayers[index] = player;
    setPlayers(newPlayers);
  }

  // Delete player by id passed
  function handlePlayerDelete(id) {
    if (selectedPlayerId != null && selectedPlayerId === id) {
      setSelectedPlayerId(undefined);
    }
    setPlayers(players.filter((player) => player.id !== id));
  }

  // Select player (set the state)
  function handlePlayerSelect(id) {
    setSelectedPlayerId(id);
  }

  return (
    <PlayerContext.Provider value={playerContextValue}>
      <Navbar />
      <Grid gridTemplateColumns="60% 40%" p={5}>
        <PlayerList players={players} />
        {selectedPlayer && <PlayerEdit player={selectedPlayer} />}
      </Grid>
    </PlayerContext.Provider>
  );
}

export default App;
