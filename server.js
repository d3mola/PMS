const express = require('express');
const bodyParser = require('body-parser')
const debug = require('debug');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

const connectionString = process.env.MONGODB_URI;

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

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to location Management!' });
});

app.use('*', (req, res) =>
    res.status(404).json({
        message: `Welcome! Check https://github.com/d3mola/PMS/blob/master/README.md for valid routes`
    })
);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

module.exports = app;
