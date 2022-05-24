import type { GatsbyConfig } from "gatsby";
import { markedUrl } from "./src/utils/constants";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-script-blog-post`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
  partytownProxiedURLs: [markedUrl],
};

export default config;
