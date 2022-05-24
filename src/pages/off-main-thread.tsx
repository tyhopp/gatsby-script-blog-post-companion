import React from "react";
import { Script, ScriptStrategy } from "gatsby";
import { markedUrl } from "../utils/constants";
import { Demo } from "../components/demo";

const OffMainThreadPage = () => {
  return (
    <main>
      <title>Marked App - Off main thread Strategy</title>
      <h1>Marked App - Off main thread Strategy</h1>
      <Demo loaded={true} />
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
