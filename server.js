const express = require('express');
const bodyParser = require('body-parser')
const debug = require('debug');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

const connectionString = 'mongodb://localhost:27017/population_management_dev';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, () => {
    console.log('db connected successfully...');
});

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to location Management!' });
});

app.use('*', (req, res) =>
    res.status(404).json({
        message: `Welcome! Check the documentation for valid routes`
    })
);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

module.exports = app;
