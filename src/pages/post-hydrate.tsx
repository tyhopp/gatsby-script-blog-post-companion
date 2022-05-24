import React, { useState } from "react";
import { Script, ScriptStrategy } from "gatsby";
import { markedUrl } from "../utils/constants";
import { Stats } from "../components/stats";
import { Demo } from "../components/demo";

const PostHydratePage = () => {
  const [perfRecord, setPerfRecord] = useState<PerformanceResourceTiming>();

  return (
    <main>
      <title>Marked App - Post Hydrate Strategy</title>
      <h1>Marked App - Post Hydrate Strategy</h1>
      <Stats perfRecord={perfRecord} />
      <Demo perfRecord={perfRecord} />
      <Script
        src={markedUrl}
        strategy={ScriptStrategy.postHydrate}
        onLoad={() => {
          const [markedPerfRecord] = performance.getEntriesByName(markedUrl);
          setPerfRecord(markedPerfRecord as PerformanceResourceTiming);
        }}
      />
    </main>
  );
};

export default PostHydratePage;
