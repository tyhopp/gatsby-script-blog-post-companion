import React, { useState } from "react";
import { Script, ScriptStrategy } from "gatsby";
import { markedUrl } from "../utils/constants";
import { Stats } from "../components/stats";
import { Demo } from "../components/demo";

const IdlePage = () => {
  const [perfRecord, setPerfRecord] = useState<PerformanceResourceTiming>();

  return (
    <main>
      <title>Marked App - Idle Strategy</title>
      <h1>Marked App - Idle Strategy</h1>
      <Stats perfRecord={perfRecord} />
      <Demo loaded={Boolean(perfRecord)} />
      <Script
        src={markedUrl}
        strategy={ScriptStrategy.idle}
        onLoad={() => {
          const [markedPerfRecord] = performance.getEntriesByName(markedUrl);
          setPerfRecord(markedPerfRecord as PerformanceResourceTiming);
        }}
      />
    </main>
  );
};

export default IdlePage;
