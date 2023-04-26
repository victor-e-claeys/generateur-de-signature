This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Publishes the built project to Github pages. Hurray for free hosting.

## Structure

Clients' signatures are each within their own directories within the signatures directory. Any image resources that must be publicly accessible can be put within the public directory, ideally contained in a subdirectory with the client's name.

To access a client's signature add the name of the signature component as a url hash and the project will load the appropriate signature. For example:

https://victor-e-claeys.github.io/generateur-de-signature/#VictorConceptum