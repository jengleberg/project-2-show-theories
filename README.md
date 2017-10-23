# Show Theories

This project is my first Full Stack App!  This was a very challenging, yet rewarding project and I increased my knowledge significantly.

Show Theories is a site that pulls in Popular TV shows from an API and also allows the user to search for shows from the API.  Users can see the show details and add "theories" to their favorite shows to share with friends and other users.  

## Approach Taken

### Wire Frames

I started the project by creating wireframes of my vision for the site:
[First Page](https://i.imgur.com/4ZcwHGx.png)
[Show Page](https://i.imgur.com/rJ5BwKP.png)

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
