# Bot Battlr - Mini Web App
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This React application allows you to browse through a list of robots, view a robot's details, and enlist bots into your army.

# Introduction
For this project, I built a React application that displays a list of available bots. You can view the profiles of all bots in the BotCollection. By clicking on a bot, you can enlist it into your YourBotArmy. Each bot can be enlisted only once, but it will remain visible in the BotCollection. You can also discharge enlisted bots from your army, which removes them from YourBotArmy. Additionally, you can permanently delete bots by clicking the "Delete" button.

# Project Setup
To run this project locally, follow these steps:

Clone the repository: git clone https://github.com/yourusername/bot-battlr.git
Change directory: cd bot-battlr
Install dependencies: npm install
Start the development server: npm start
Open your browser and visit: http://localhost:3000

# Features
View profiles of all bots in the BotCollection.
Enlist a bot into your army by clicking on it.
Discharge a bot from your army by clicking on it (removes it from YourBotArmy).
Permanently delete a bot by clicking the "Delete" button.
Dependencies
This project uses the following main dependencies:

react: To build the user interface and components.
react-dom: For rendering the React components in the DOM.
json-server: To run the JSON server for data fetching.
Please ensure you have these dependencies installed globally or within your project.

How to Use
After setting up the project as described in the Project Setup section, you can open your browser and access the Bot Battlr application at http://localhost:3000. You will see the list of available bots in the BotCollection. To enlist a bot, simply click the "Enlist" button, and it will appear in YourBotArmy. To discharge a bot, click the "Discharge" button in YourBotArmy, and it will be removed from your army. To delete a bot permanently, click the "Delete" button in the bot's profile.

API Endpoints
The application fetches bot data from a local JSON server. The available endpoints are:

GET /bots: Returns a list of all bots with their details.
DELETE /bots/:id: Deletes a bot with the specified id.# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
