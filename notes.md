REACT CONCEPTS

1. React: "Don't touch the DOM. I'll do it."
    - React takes care of DOM changes for us using something called the VirtualDOM.

2. Build websites like lego blocks.
    - React builds websites with components.

3. Unidirectonal data flow (one way data flow).
    - Data flows only one way so it's easier to debug our code.

4. React: "I'm just the UI, the rest is up to you."
    - Unlike AngularJS which is like a kitchen with everything you need all at once, React is like a stove and anything you need can be easily grabbed.

REACT KEYWORDS

- Declarative
- JSX
- Components
- State
- Props
- VirtualDOM

React is a Declarative paradigm, that is, instead of telling our app what to do, we give it a State, some Components that are built with JSX which sometimes receives Props, which
creates a VirtualDOM in JavaScript and used by the React library to update the DOM in a Declarative way.

THE JOB OF A REACT DEVELOPER

1. Decide on Components.
2. Decide the State and where it lives.
3. What changes when State changes.

NVM

- https://github.com/nvm-sh/nvm#installation-and-update

NODE

- https://nodejs.org/en/download/

YARN

- https://yarnpkg.com/getting-started/install

NPM vs YARN

- Install dependencies from package.json: npm install == yarn
- Install a package and add to package.json: npm install package --save == yarn add package
- Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev
- Remove a dependency from package.json: npm uninstall package --save == yarn remove package
- Upgrade a package to its latest version: npm update --save == yarn upgrade
- Install a package globally: npm install package -g == yarn global add package

NPX vs NPM

- npx installs packages and executes them immediately and does not save the package to disc.
- npm installs packages to disc and does not execute them immediately.

DO NOT EJECT YOUR CREATE-REACT-APP

- By using create-react-app we automatically get the best system and project build out of the box.
- Any time there are updates and the industry changes its way of doings things, create-react-app will have these changes automatically implemented by professionals.
- You lose all the benefits as create-react-app gets more and more updates.

CLASSES VS HOOKS

- TBA

GENERAL REACT TIPS

- Good rule of thumb concerning arrow functions and binding in React: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
    - https://reactjs.org/docs/handling-events.html

GITHUB

- Why GitHub decided to rename the original branch from master to main: https://github.com/github/renaming

LIFECYCLE METHODS (CLASSES)

- Methods that get called at different stages of when components gets rendered.
    - componentDidMount: called when a component gets rendered for the first time.