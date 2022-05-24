import React, { useState, useEffect } from "react";
import { Script, ScriptStrategy } from "gatsby";
import { markedUrl } from "../utils/constants";
import { Demo } from "../components/demo";

const OffMainThreadPage = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore marked is a global
      const knownLoaded = typeof marked === `object`;

      if (knownLoaded || performance.now() > 10000) {
        setLoaded(knownLoaded);
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <main>
      <title>Marked App - Off main thread Strategy</title>
      <h1>Marked App - Off main thread Strategy</h1>
      <Demo loaded={loaded} />
      <Script
        src={markedUrl}
        strategy={ScriptStrategy.offMainThread}
        forward={[`marked.parse`]}
      />
      <Script strategy={ScriptStrategy.offMainThread}>
        {`
          // This is not recommended, we're effectively abandoning the reactivity of React state management for polling.
          // This is a great example of a case where the off-main-thread strategy is not the optimal choice.
          setInterval(() => {
            document.querySelector('.demo-html-rendered').innerHTML = marked.parse(document.querySelector('.demo-markdown-input').value)
          }, 100)
        `}
      </Script>
    </main>
  );
};

export default OffMainThreadPage;
