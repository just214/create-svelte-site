# Create Svelte Site [![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) [![Version](https://img.shields.io/npm/v/create-svelte-site.svg)](https://npmjs.org/package/create-svelte-site) [![Downloads/week](https://img.shields.io/npm/dw/create-svelte-site.svg)](https://npmjs.org/package/create-svelte-site) [![License](https://img.shields.io/npm/l/create-svelte-site.svg)](https://github.com/gojutin/create-svelte-site/blob/master/package.json)

### Create a [Svelte](https://svelte.dev/) or [Sapper](https://sapper.svelte.dev/) site in a single command.



![create-svelte-site gif](https://res.cloudinary.com/gojutin/image/upload/v1557246205/create-svelte-site/create-svelte-site.gif "create-svelte-site gif")

## Usage

## Creating a Site
**You’ll need to have Node 8.10.0 or later on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### With npx

```sh
  npx create-svelte-site my-site
```

### With npm

```sh
  npm init svelte-site my-site
```

### With yarn

```sh
  yarn create svelte-site my-site
```

_Note: We are using `my-site` as an example. This can be any project name you choose._

You will be prompted to select a template from the official Svelte template library.

![create-svelte-site prompt](https://res.cloudinary.com/gojutin/image/upload/w_300/v1557245550/create-svelte-site/create-svelte-site-prompt.png "create-svelte-site prompt")

After you make your selection, your new site will be created in a directory named `my-site` inside the current folder.

### Next steps:

Navigate to the newly created directory.

```sh
cd my-site
```

Install the dependencies

```sh
npm install
```

or 

```sh
yarn
```

Then, start up the development server.

```sh
npm run dev
```

Your site will be available at [http://localhost:5000](http://localhost:5000).

_Note: `npm run dev` does not apply to the `Svelte (component)` project type._

## Commands

Here is a full list of the options and the corresponding templates that are executed. 

Under the hood, this library is using [nodegit](https://github.com/nodegit/nodegit/) to generate your new project using an official Svelte template.

| Command            | Template                           |
| ------------------ | -----------------------------------|
| Svelte (rollup)    | `svelte/template`                  |
| Svelte (webpack)   | `svelte/template-webpack`          |
| Svelte (component) | `svelte/component-template`        |
| Sapper (rollup)    | `sveltejs/sapper-template#rollup`  |
| Sapper (webpack)   | `sveltejs/sapper-template#webpack` |

## Useful Resources

- [Official Svelte website](https://svelte.dev/)
- [Official Sapper website](https://sapper.svelte.dev/)
- [Svelte repo](https://github.com/sveltejs/svelte)
- [Sapper repo](https://github.com/sveltejs/sapper)
- [Svelte (rollup) template repo](https://github.com/sveltejs/template)
- [Svelte (webpack) template repo](https://github.com/sveltejs/template-webpack)
- [Svelte (component) template repo](https://github.com/sveltejs/component-template)
- [Sapper template repo](https://github.com/sveltejs/sapper-template)
