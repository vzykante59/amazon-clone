This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

# This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

install extension by searching for

1. es7 react/redux
2. prettier
   enter " command , " for open settings
   search for format
   select checkbox " save on format

3)goto material UI url , https://material-ui.com/

sudo npm install @material-ui/core --registry=https://registry.npmjs.org/

4. search for icons and run below command
   sudo npm install @material-ui/icons --registry=https://registry.npmjs.org/

5. search in search box for "search"
   click on search icon and copy the command for importing searcicon
   for ex: import SearchIcon from '@material-ui/icons/Search'

https://material-ui.com/components/material-icons/

5. to get autocode when u type, enable emmet for react
   a) goto settings and add key/value pair as javascript:javascriptreact

star image : http://www.i2symbol.com/symbols/stars

filling stars: https://css-tricks.com/five-methods-for-five-star-ratings/

6. npm install react-router-dom
   npm i react-currency-format

extensions:
git lens
ES7 react redux
auto close tag

for deploying:
ML-C02YVCWULVCG:amazon-clone vkante\$
1)firebase login
2)firebase init 1) Hosting
a) use an existing Project
select ex: amazon-challenge
what do you want to use as your public directory? build
configure as a single-page app (rewrite all urls to /index.html)? (y/N) y //(default is No)
3)npm run build (builds the prodcution level code)
4)firebase deploy

STRIPE:
npm install @stripe/stripe-js
npm install @stripe/react-stripe-js

create account in stripe.com and copy the publishable key from "API KEYS' menu on left side

AXIOS:
npm install axios

BACKEND:

1)cloud functions:
firebase init

select functions option (with space bar and enter)
? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? Yes

2.  a)install express
    b)npm install cors
    c)npm install stripe

3) for testing API in firebase , start emulators
   > firebase emulators:start
   > //follow console logs
   > express running on below url
   > http://localhost:5001/challenge-67650/us-central1/api
