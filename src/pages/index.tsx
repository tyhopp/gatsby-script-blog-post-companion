import * as React from "react";
import { ScriptStrategy } from "gatsby";
import "../styles/index.css";

const pages = [
  ScriptStrategy.postHydrate,
  ScriptStrategy.idle,
  ScriptStrategy.offMainThread,
];

const IndexPage = () => {
  return (
    <main className="index-main">
      <title>Gatsby Script Blog Post Companion</title>
      <h1>Gatsby Script Blog Post Companion</h1>
      <p>
        This site shows how we can use the
        {` `}
        <a href="https://gatsby.dev/gatsby-script">Gatsby Script component</a>
        {` `}
        to build an in-browser markdown notes app <i>performantly</i>.
      </p>
      <p>
        Each page below uses a different loading strategy to load
        {` `}
        <a href="https://github.com/markedjs/marked">marked</a>, the module
        we'll use to power our app:
      </p>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a href={`/${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
