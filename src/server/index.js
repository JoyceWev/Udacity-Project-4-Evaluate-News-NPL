const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "fc1e63e7",
  application_key: "b773c9e3c2e30ac9e917791652b022d8"
});
// Setup empty JS object to act as endpoint for all routes
let textOfBrowser = [];

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname);
console.log(textapi);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port '+port)
})

// POST method route
// DEZE POST DE HOI IK BEN TEKST NAAR /ADDTEXT EN HAALT DIE VERVOLGENS OP MET POSTDATA IN FORMHANDLER

 app.post('/sentiment', sendData);
 function sendData (req, res) {
 	const text = req.body.text
 	console.log(text);
 	//res.send({text: 'i am feeling jolly good'});
 	textapi.sentiment({
		text: text,
		mode: 'Document' 
	},
	function(error, response) {
		//console.log(response.text)
		if (error === null) {
		//add your code here for manipulating response }
		res.send(response)
		}
	})
 	//console.log('textofbrowser is filled with:'+textOfBrowser);
 };


