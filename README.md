# Project Apostle
An open source API test runner.

## Get Involved
If you are interested in contributing to Apostle, please to join the conversation on my Discord server:

[Join the Discord](https://discordapp.com/invite/AptKHUS)

Once you've joined, DM a mod to request contributor access to both the repository and the Discord channels.

## Follow Along
Progress will be tracked via the following Trello board;

[Project Apostle Backlog](https://trello.com/c/V7ITr2eA/1-about-project-apostle-getting-involved)

## Prerequisites

### Node
You must have node installed on your machine. If you do not have node, you can download it at the link below:
https://nodejs.org/en/download/

This will allow us to install the dependencies for the project.

## Getting Started

First you will need to create a fork of the project to your Github account. Once you have made a fork of the repository, you can now clone the repository by going to your terminal and running the following command:

`git clone https://github.com/{github_username}/apostle.git`

*Please remember to change {github_username} to your github username!*

You should now have a copy of the forked repository available on your machine. Now we can navigate into the project with the following command:

`cd ./apostle`

Now we will see there are two 2 directories available. 1 called `app` and one called `electron`. 

The first directory `app` contains the Vue project where the web app lives.
The second directory `electron` contains the Electron project which allows the web app to run as a portable standalone application. 

You will need to navigate into each of the directories and install the dependencies for the `app` and `electron` components.

To do this you can run the following command from the `/apostle` directory:

`cd app && npm install && cd ../electron && npm install`

Now that we have all the dependencies for the application installed we can finally start the application!

We can run the application by going into each of directories and running the following commands:

`cd app && npm run serve` - This will begin the development server for the Vue application.

`cd electron && npm run start` - This will open the Vue application in the electron window.

If performed successfully you should now see the Apostle application running inside the electron window.

## Troubleshooting

 - If your electron window is blank or not navigating to the Apostle application, ensure that port 8080 is available or ensure that the Vue application is being deployed to the same port the electron app is watching.
 - If your electron window is blank, ensure that the Vue application has completed building and is deployed to port 8080.
 