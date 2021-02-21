import React, { useState, useEffect } from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";

import PlayerList from "./components/PlayerList";
import PlayerEdit from "./components/PlayerEdit";
import Navbar from "./components/Navbar";

import { Grid } from "@chakra-ui/react";

export const PlayerContext = React.createContext();

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState();
  const [players, setPlayers] = useState(samplePlayers);
  const selectedPlayer = players.find(
    (player) => player.id === selectedPlayerId
  );

  useEffect(() => {
    const playersJSON = localStorage.getItem("players");
    if (playersJSON != null) {
      setPlayers(JSON.parse(playersJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const playerContextValue = {
    handlePlayerAdd,
    handlePlayerDelete,
    handlePlayerSelect,
    handlePlayerChange,
  };

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

  function handlePlayerChange(id, player) {
    const newPlayers = [...players];
    const index = newPlayers.findIndex((player) => player.id === id);
    newPlayers[index] = player;
    setPlayers(newPlayers);
  }

  function handlePlayerDelete(id) {
    if (selectedPlayerId != null && selectedPlayerId === id) {
      setSelectedPlayerId(undefined);
    }
    setPlayers(players.filter((player) => player.id !== id));
  }

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

const samplePlayers = [
  {
    id: 1,
    name: "James Rodriguez",
    nationality: "Colombia",
    position: "CAM",
    clubs: "1. Porto\n2. Monaco\n3. Real Madrid\n4. Bayern Munich\n5. Everton",
    statistics: [
      {
        id: 1,
        name: "Goals",
        amount: 123,
      },
      {
        id: 2,
        name: "Assists",
        amount: 88,
      },
    ],
  },
  {
    id: 2,
    name: "Thierry Henry",
    nationality: "France",
    position: "ST",
    clubs: "1. Monaco\n2. Juventus\n3. Arsenal\n4. Barcelona",
    statistics: [
      {
        id: 1,
        name: "Goals",
        amount: 423,
      },
      {
        id: 2,
        name: "Assists",
        amount: 224,
      },
    ],
  },
];

export default App;
