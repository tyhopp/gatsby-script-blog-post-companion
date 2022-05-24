import React, { useState, useEffect } from "react";
import { defaultText } from "../utils/constants";
import "../styles/demo.css";

export const Demo = ({
  perfRecord,
}: {
  perfRecord: PerformanceResourceTiming | undefined;
}): JSX.Element => {
  const [text, setText] = useState<string>(defaultText);
  const [html, setHtml] = useState<string>(``);

  useEffect(() => {
    // @ts-ignore available as a global
    if (typeof marked === `object`) {
      // @ts-ignore available as a global
      const renderedHtml = marked.parse(text);
      setHtml(renderedHtml);
    }
  }, [text, perfRecord]);

  return (
    <>
      <h2 className="demo-title">Demo</h2>
      <div className="demo">
        <div className="demo-markdown">
          <p>Markdown input</p>
          <textarea
            className="demo-markdown-input"
            value={text}
            onChange={(event) => {
              setText(event.target?.value);
            }}
          />
        </div>
        <div className="demo-html">
          <p>HTML output</p>
          <div
            className="demo-html-rendered"
            contentEditable={false}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
};
