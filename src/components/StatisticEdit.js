import React from "react";
import { Grid, FormControl, Input, Button } from "@chakra-ui/react";

export default function StatisticEdit(props) {
  const { statistic, handleStatisticChange, handleStatisticDelete } = props;

  // Change statistic
  function handleChange(changes) {
    handleStatisticChange(statistic.id, { ...statistic, ...changes });
  }

  return (
    <FormControl marginBottom={1}>
      <Grid templateColumns="40% 40% auto" gap={1}>
        <Input
          type="text"
          value={statistic.name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />
        <Input
          type="text"
          value={statistic.amount}
          onInput={(e) => handleChange({ amount: e.target.value })}
        />
        <Button
          colorScheme="red"
          onClick={() => handleStatisticDelete(statistic.id)}
        >
          &times;
        </Button>
      </Grid>
    </FormControl>
  );
}
