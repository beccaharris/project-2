# The Barking Lot
The purpose of this app is to match users with the dog breed that will likely best fit their lifestyle and wants in a dog. To be matched with a breed, users have to sign up. They will then be asked to take a short survey. The results of their survey will be compared against different dog breed characteristics and will match the user and dog breed accordingly. Once matched with a breed, users will be able to search local pet shelters to find dogs that fit the description. If someone just wants to browse available pets in the area, they can go straight to the "Pets" link from the home page and do not have to be logged in. <br><br>
<a href="https://protected-escarpment-27266.herokuapp.com/">Check it out on Heroku!</a>

## Getting Started 

### Prerequisites
* Node
* Clone repo to your local computer. 
* Database manager (Sequel Pro, MySQL Workbench, etc.)

### Installing
```
npm install
```
Individually, you'd want to install these:
```
npm init 
npm install bcrypt-nodejs
npm install body-parser
npm install express
npm install express session
npm install mysql2
npm install passport
npm install passport-local
npm install sequelize 
npm install sequelize-cli
```
*Ensure the ```node_modules/ ``` folder is in your .gitignore file. If it's not, add it.*

### Migrating and setting up tables
The following steps must be done in order for the migration to work.
1) In database manager or from terminal, run ```CREATE DATABASE dogs_db``` (can be found in the db/schema.sql file)
2) Migrate the db by running ```node_modules/.bin/sequelize db:migrate```
3) Seed the db by running ```node_modules/.bin/sequelize db:seed:all```
4) Look in your db at the "breeds" table - there should now be seed data available in the content of the table.
5) The rest of the tables will be generated upon starting the server.

## Running it
* Open the app in your integrated terminal or cd into the app folder in your regular terminal
* Run ```node server.js``` (you should now see the additional tables - users and surveys - in your db)
* Navigate to localhost:8080

## Deployment
The production environment for this app uses Jaws_DB and has been deployed to Heroku.

## Built With:
* <a href="https://nodejs.org/en/">Node v8.9.3</a>
* <a href="https://expressjs.com/">Express</a>
* <a href="docs.sequelizejs.com">Sequelize/Sequelize CLI</a>
* <a href="https://www.npmjs.com/package/mysql2">MySQL2</a>
* <a href="http://www.passportjs.org/">Passport.js (Local Strategy)</a>
* <a href="https://getbootstrap.com/">Bootstrap v4.0</a>
* <a href="https://www.petfinder.com/developers/api-docs">Petfinder API</a>
* <a href="https://developers.google.com/maps/documentation/geolocation/intro">Google Geolocation API</a>

## Built By:
* <a href="https://github.com/rocelia">Rocelia Cooper</a>
* <a href="https://github.com/Wyatt-1996">Wyatt Sommer</a>
* <a href="https://github.com/phoenixwerth">Phoenix Werth</a>
* <a href="https://github.com/beccaharris">Becca Harris</a>
