# Project Setup

## Create your GitHub pages repository

- On GitHub create a `new repository` entitled `your-user-name.github.io`
- `git clone` this empty repository

## App Environment setup

- `npm init -y` to set up a `package.json` file and accept the default settings
- `npm i --save-dev parcel jest babel-jest @babel/core @babel/preset-env` to install Parcel, Jest and Babel
- create a `.babelrc` file and add the following snippet to this file:
  ```
     {
        "presets": ["@babel/preset-env"]
    }
  ```
- Edit the `scripts` in your `package.json` file to read as

  ```
    {
        "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html",
            "test": "jest --watchAll"
        }
    }
  ```

- **IMPORTANT** Edit your `main` entry point in your `package.json` to be `index.html`

- Create a [gitignore file at gitignore.io](https://www.toptal.com/developers/gitignore)

  - add Node and VisualStudioCode to this gitignore and bring into the project

- **IMPORTANT** After all of these updates be sure to do an `npm install` to get the latest changes into your project environment

## Interacting with this application while you are in a local environment

- `npm test` will run the tests
- `npm start` will run the application at `localhost:1234`

## To Deploy the app to GitHub pages

- `npm run build` will stage the app to production
- now `add, commit and push` your changes
- you will have a `dist` folder that tracks the deploy
