# Show Theories

This Show Theories site pulls in Popular TV shows from an API and also allows the user to search for shows from the API.  Users can see the show details and add "theories" to their favorite shows to share with friends and other users.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
MongoDB
Express
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
