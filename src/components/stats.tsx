import React from "react";
import { trim } from "../utils/trim";
import "../styles/demo.css";

export const Stats = ({
  perfRecord,
}: {
  perfRecord: PerformanceResourceTiming | undefined;
}) => {
  return (
    <>
      <h2>Marked module load stats:</h2>
      <ul>
        <li>Fetch start: {trim(perfRecord?.fetchStart || 0)} ms</li>
        <li>Response end: {trim(perfRecord?.responseEnd || 0)} ms</li>
        <li>Duration: {trim(perfRecord?.duration || 0)} ms</li>
      </ul>
    </>
  );
};
