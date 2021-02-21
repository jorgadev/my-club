import React from "react";
import Statistic from "./Statistic";

export default function StatisticList({ statistics }) {
  const statisticElements = statistics.map((statistic) => {
    return <Statistic key={statistic.id} {...statistic} />;
  });

  return <div>{statisticElements}</div>;
}
