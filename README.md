## Course Backend

Conditions -
* Made without any full youtube tutorial. Can reference internet.
* CRUD API - GET one, GET all, POST, PATCH, DELETE
* Course - Name, Code, Seats


## API

* [x] Initialize node repository - `npm init -y`
* [x] Insall express, morgan, cors, dotenv, nodemon
* [x] Make nodemon script
* [x] Import express
* [x] Import and config dotenv
* [x] Make .env file and make PORT variable
* [x] Make .gitignore file and put .env and node_modules
* [x] Make app
* [x] Import and use morgan
* [x] Add Routes
* [x] Test routes with postman

## Database
* [x] Make mongoDB from atlas
* [x] Install and import mongoose
* [x] Connect Mongoose
* [x] Make Schema and Model
* [x] Write functions to use database
* [x] Done with project

## Notes
* in gitignore -> **/file looks for file in all directories
                    /*.ext looks for all files with that extension
                    **/*.env looks for all .env files
                    Put node modules in gitignore as they will be installed by themselves.s

* For dot env -> you have to require dot env and configure `require('dotenv').config()`
* req.body() is not a function, use req.body
* req.params() is not a function, use req.params

## How to Install
* clone repo
* install node.js if not existing
* cd into server folder
* `npm install`
* Make a .env file 
* Put `PORT = port_name` in .env file
* Make MongoAtlas Database and MONGODB_URI in .env file

## How to Test
* Open Postman
* Send different requests for different testing

Read all => 
request_type = GET
url = localhost:port/

Read one =>
request_type = GET
url = localhost:port/:id

Create one =>
request_type = POST
request_body = course changes
url = localhost:port/

Update one =>
request_type = POST
request_body = course changes
url = localhost:port/:id

Delete one =>
request_type = DELETE
url = localhost:port/:id

## Further Development Strategy
Make Frontend with some framework