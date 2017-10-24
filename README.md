# Show Theories

Show Theories is a site that pulls in Popular TV shows from an API and also allows the user to search for shows from the API.  Users can see the show details and add "theories" to their favorite shows to share with friends and other users.  

This project is my first Full Stack App!  This was a very challenging, yet rewarding project and I increased my knowledge significantly.

## Approach Taken

### Wire Frames

I started the project by creating wireframes of my vision for the site:
<a href="https://imgur.com/4ZcwHGx"><img src="https://i.imgur.com/4ZcwHGx.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/rJ5BwKP"><img src="https://i.imgur.com/rJ5BwKP.png" title="source: imgur.com" /></a>

### User Stories

I then created a set of [User Stories](https://trello.com/b/BFp5ozy8/project-2-show-theories) stories for the app experience.  They track what needs to be included in the app in order for it to function and meet the project requirements.



### Workflow

- App Foundation of server.js, routes and controllers
- EJS File Templating (ongoing throughout project)
- Created get route for Theories in server.js
- Created single Theory get route in server.js
- Installed MongoDB
- Setup Mongoose Model for Theories
- Seeded my DB with fake Theories and verified with Robo 3T
- Refactored the Controllers and Routes into seperate files
- Pushed to Heroku
- Built the create theory route and controller
- Added flash success message to the Theories upon successful create
- Built the Edit Theory routes, controller and template
- Built the Delete Theory routes, controller and template
- Built the Shows routes and controllers
- Added passport and bcrypt for the user authentication
- Built Signup, Login and Logout routes and controllers
- Added app.js file to get the theories from the API
- Setup EJS template for the shows and single show
- Combined referenced Theories with Show id to track theories per show (Work in Progress)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See how to use for notes on how to deploy the project on a live system.

### Prerequisites

```
MongoDB
```

### How To Use

```
# Clone this repository
$ git clone https://github.com/jengleberg/project-2-show-theories.git

# Go into the repository
$ cd project-2-show-theories

# Install Dependencies
$ npm install

# Run the app
$ nodemon server.js
```

## Running the tests

Mocha / Chai testings can be performed by going into the app directory of the repo and running mocha from the terminal.

### Test example for creation of new theory

```
describe("Theory", function() {
 describe("new", function() {
  it("initializes a new theory", function() {
      var theoryish = new Theory();

    });
});
       
    });
```

## Built With

* [Node.js](https://nodejs.org/en/)
* [Bootstrap](http://getbootstrap.com/) 
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* Javascript
* JQUERY
* [axios](https://www.npmjs.com/package/axios)
 - Note:  axios is an npm package that can be used to make http requests from node.js.  I saw one of my squad members using it and  decided to give it a try.  It was easy to use and has some nice benefits including automatic transforming for JSON data. I am not too sure how this package compares to other similar packages at this point and will attempt to refactor and compare.  

 

## Authors

* **Jeff Engleberg** - [My GitHub](https://github.com/jengleberg)


## Acknowledgments

* My Squad!!  Court, Emma and Mike!
* My Instructors!! Zeb, Nick and Stefan!
* Google
* Stack Overflow
* Scotch.io tutorial
