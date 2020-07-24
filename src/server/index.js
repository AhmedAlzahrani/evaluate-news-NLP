let path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests



app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
})

app.post('/analysis', function (req, res) {
    console.log(req.body.url);
    textapi.sentiment({
        url: req.body.url
      }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.json(response);
        }else{
            res.json({message: `${error}`});
        }
      });
})