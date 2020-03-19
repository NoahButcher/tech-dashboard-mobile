## Technology Dashboard v2

This is an emergency release of the new Technology Dashboard Chrome extension for Rock Hill Schools technology staff during the Coronavirus eLearning period. It is hosted through GitHub Pages to allow it to be accessible on any device without the need to install anything by going to [bit.ly/tech-dashboard](bit.ly/tech-dashboard).

### Links

The Links section has multiple categories with links to various sites and communication options to help employees access useful information from home.

### Home

The Home section was originally intended for Slack integration, but has been replaced with Reminders for answering technology calls and emails received during eLearning.

### Cloning this repository

Anyone interested in cloning this repository to implement a similar solution is welcome to do so, just make sure to clear out all of our links.

You will need to install Node.js and NPM, as well as change the homepage in package.json to the website you wish to host it on. The app was create with React.js using create-react-app.

If you plan on uploading it to GitHub Pages as well, you will need to use the following command in the repo

`npm install gh-pages --save`

If that gives you trouble, try running command prompt as admin.