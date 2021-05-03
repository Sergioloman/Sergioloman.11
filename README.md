# Sergioloman.11
Note Taker using Express.js
## Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Features](#features)
* [Test](#test)
* [Bonus](#bonus)
## Requirements

[Node.Js](https://nodejs.dev/) : 
Node is our main tool here and allows us to use javascript and communicate with our command line

## Installation

Copy this repository in your your destination of choice. Then run the *npm install* command in your terminal. This will download the *Express* as well as the *UuId* packages.

It is recommended to also install *Nodemon* globally, to do so use the following command * npm install nodemon -g * to enable nodemon globally on your computer.

Nodemon will allow you to make edits on the server and execute them withouth having to restart the server with every change.

## Features

### Note.js
Note.js handles all of our methods for each of the notes. By creating a class for all notes, we are able to make methods that can be applied to future instances of the note class.


### ApiRoutes.js
This file handles all the api request, it enables the retrieval, posting and deletion of notes by making request to our server for each action.

### HtmlRoutes.js
Our HTMLroutes.js file links our pages together allowing the files to live on the server and enabling their retrieval.
 
### Server.js
Our server.js is the main brain of our app. this file sets up our server, its port and enables modules. Our application can only run once this file is running.

## Test

* Testing for this application has been made possible thanks to ![Insomnia](https://insomnia.rest/), this handy application allows us to test our api request withouth having to use our browser. Be sure to download it if you are to test any new features!

## Contribute

* we are always improving our code. If you have any suggestions on how to make our program more efficient or DRY, please us a message through Github or at [via email](sergio@email.com) and we will get back to you.

## Bonus

* as always be sure to check out our commends in the files to get a detailed description on what is happening in our code. 

### Deployement
* Click ![HERE](https://note-taker-by-sergio.herokuapp.com/) to see our deployed application.


