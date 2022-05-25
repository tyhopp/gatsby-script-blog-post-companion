# Gatsby Script Blog Post Companion

This is the companion project to a forthcoming blog post on [https://gatsbyjs.com/blog](https://gatsbyjs.com/blog) about the Gatsby Script component.

See the [release notes](https://www.gatsbyjs.com/docs/reference/release-notes/v4.15/#script-component) and [reference documentation](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-script/) for more information about the Gatsby Script component.

This project uses the Gatsby Script component to load [`marked`](https://github.com/markedjs/marked), a module for parsing Markdown into HTML, with various [loading strategies](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-script/#strategies).

Each implementation has it's own page:

- [`post-hydrate`](src/pages/post-hydrate.tsx)
- [`idle`](src/pages/idle.tsx)
- [`off-main-thread`](src/pages/off-main-thread.tsx)

The blog post will discuss how to evaluate strategy selection using this project as an example.

## Usage

- Clone this repo and navigate to it in your terminal
- `npm i`
- `npm run develop`

## Demo

The [demo is deployed on Gatsby Cloud](https://gatsbyscriptblogpostcompanionm.gtsb.io).
