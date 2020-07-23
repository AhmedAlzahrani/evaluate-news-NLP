let path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const aylien = require("aylien_textapi");

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests

const PORT = 8081;

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

console.log('Hello');