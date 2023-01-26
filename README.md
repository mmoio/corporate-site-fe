# Frontend for Pagopa.it

Frontend built with gatsby for the PagoPa.it website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.
You can use [Yarn](https://yarnpkg.com/) instead of NPM.

[CMS Backend](https://github.com/pagopa/cms-corporate-backend) for Pagopa.it running  on your machine.

### How To Use

Clone this repository with https or ssh. Then from your command line:
```bash
# Go into the repository
$ cd corporate-site-fe

```
You can install the dependencies either using NPM or Yarn:
```bash
# Using NPM:
$ npm install

# Using Yarn:
$ yarn
```


Create an environment file by copying the sample one:
```sh
cp .env.example .env.development
```

The table below describes all the Environment variables needed by the application.

| Variable name | Description | type |
|----------------|-------------|------|
|STRAPI\_API\_URL| strapi service | endpoint/string
|STRAPI\_TOKEN| strapi access token | token/string


Start the local development server:
```bash
# Using NPM:
$ npm run develop

# Using Yarn:
$ yarn develop
```


Once your server has started, go to this url `http://localhost:8000/` and you will see the website running.

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying data.

### Technologies used

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

### What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: This file.
