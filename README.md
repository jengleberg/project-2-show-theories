# Show Theories

This project is my first Full Stack App!  This was a very challenging, yet rewarding project and I increased my knowledge significantly.

Show Theories is a site that pulls in Popular TV shows from an API and also allows the user to search for shows from the API.  Users can see the show details and add "theories" to their favorite shows to share with friends and other users.  

## Approach Taken

### Wire Frames

I started the project by creating wireframes of my vision for the site:
<a href="https://imgur.com/4ZcwHGx"><img src="https://i.imgur.com/4ZcwHGx.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/rJ5BwKP"><img src="https://i.imgur.com/rJ5BwKP.png" title="source: imgur.com" /></a>

### User Stories

I then created some user stories for the app experience.  What needs to be included in the app in order for it to function and meet the project requirements.  A few stretch goals are pending.

[User Stories](https://trello.com/b/BFp5ozy8/project-2-show-theories)

### Workflow

- App Foundation of server.js, Routes and Controllers
- EJS File Templating (ongoing throughout project)
- Created Show Route for Theories in server.js
- Created Single Theory Show Routes in server.js
- Installed MongoDB
- Setup Mongoose Model for Theories
- Seeded my DB with fake Theories nd verified with Robo 3T
- Refactored the Controllers and Routes and modulized them
- Built the create theory route and controller
- Added Flash Success Messages to the Theories upon create
- Built the Edit Theory routes and controllers
- Built the Delete Theory routes and controllers
- Built the Shows routes and controllers
- Added passport and bcrypt for the user authentication
- Built Signup, Login and Logout routes and controllers
- Added app.js file to get the theories from the API
- Setup EJS template for the shows and single show
- Combined Theories and Shows (Work in Progress)

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

 

## Authors

* **Jeff Engleberg** - [My GitHub](https://github.com/jengleberg)


## Acknowledgments

* My Squad!!  Court, Emma and Mike!
* Google
* Stack Overflow
* Scotch.io tutorial
