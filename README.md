# Create Svelte Site [![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) [![Version](https://img.shields.io/npm/v/create-svelte-site.svg)](https://npmjs.org/package/create-svelte-site) [![Downloads/week](https://img.shields.io/npm/dw/create-svelte-site.svg)](https://npmjs.org/package/create-svelte-site) [![License](https://img.shields.io/npm/l/create-svelte-site.svg)](https://github.com/gojutin/create-svelte-site/blob/master/package.json)

### Create a [Svelte](https://svelte.dev/) or [Sapper](https://sapper.svelte.dev/) app in a single command.



![create-svelte-site gif](https://res.cloudinary.com/gojutin/image/upload/v1557245484/create-svelte-site/create-svelte-site.gif "create-svelte-site gif")

## Usage

## Creating an App
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

After you make your selection, your new app will be created in a directory named `my-site` inside the current folder.

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

Your app will be available at [http://localhost:5000](http://localhost:5000).

_Note: `npm run dev` does not apply to the `Svelte (component)` project type._

## Commands

Here is a full list of the templates and the corresponding scripts that are executed. 

Under the hood, this library is using [degit](https://github.com/Rich-Harris/degit) to generate your new project using an official Svelte template.

| Command            | Script                                              |
| ------------------ | --------------------------------------------------- |
| Svelte (rollup)    | `degit svelte/template my-site`                  |
| Svelte (webpack)   | `degit svelte/template-webpack my-site`          |
| Svelte (component) | `degit svelte/component-template my-site`        |
| Sapper (rollup)    | `degit sveltejs/sapper-template#rollup my-site`  |
| Sapper (webpack)   | `degit sveltejs/sapper-template#webpack my-site` |

## Useful Resources

- [Official Svelte website](https://svelte.dev/)
- [Official Sapper website](https://sapper.svelte.dev/)
- [Svelte Repo](https://github.com/sveltejs/svelte)
- [Sapper Repo](https://github.com/sveltejs/sapper)
- [Svelte (rollup) template repo](https://github.com/sveltejs/template)
- [Svelte (webpack) template repo](https://github.com/sveltejs/template-webpack)
- [Svelte (component) template repo](https://github.com/sveltejs/component-template)
- [Sapper template repo](https://github.com/sveltejs/sapper-template)
