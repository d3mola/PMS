# PMS
Api for a population management system

## Requirements
- Node.js v8.x or higher
- npm or yarn

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

| HTTP VERB | Description | Endpoints |
| --- | --- | --- |
| `POST` | Creates a location | /api/locations |
| `GET` | Retrieves a list of all locations | /api/locations |
| `GET` | Gets one location | /api/locations/:id |
| `PUT` | Updates a location | /api/locations/:id |
| `DELETE` | Deletes a location | /api/locations/:id |
