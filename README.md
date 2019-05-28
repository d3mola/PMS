# PMS
Api for a population management system

## Features
- User can create a location
- User can update a location
- User can delete a location
- User can view the list of locations
- User can get a single location

## Requirements
- Node.js v8.x or higher
- npm or yarn
- MongoDB

## Installation
```
$ git clone https://github.com/d3mola/PMS.git
$ cd population-management-system
$ yarn
$ yarn dev               # Start the development environment
$ yarn start             # Run the production build
$ yarn test              # Run tests
```

You can access the API via http://localhost:3000/api/

Usage

| HTTP VERB | Description | Endpoints | Payload
| --- | --- | --- | --- |
| `POST` | Creates a location | /api/locations | location(string), male(number), female(number) |
| `GET` | Retrieves a list of all locations | /api/locations |
| `GET` | Gets one location | /api/locations/:id |
| `PUT` | Updates a location | /api/locations/:id | location(string), male(number), female(number) |
| `DELETE` | Deletes a location | /api/locations/:id |
