var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "fc1e63e7",
  application_key: "b773c9e3c2e30ac9e917791652b022d8"
});
// Setup empty JS object to act as endpoint for all routes
let textOfBrowser = [];

const app = express()

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

 // sendData
 app.get('/addText', sendData);
 function sendData (req, res) {
 	res.send({text: 'i am feeling jolly good'});
 	//console.log('textofbrowser is filled with:'+textOfBrowser);
 };

app.get('/sentiment', function (req, res) {
	console.log('textofbrowser is filled with:'+ textOfBrowser );
	textapi.sentiment({
		text: textOfBrowser,
		mode: 'Document' 
	},
	function(error, response) {
		//console.log(response.text)
		if (error === null) {
		//add your code here for manipulating response }
		res.send(response)
		}
	})
});

 app.post('/addText', addText);
 
 function addText (req, res) {
 	let textEntry = req.query;
 	console.log(textEntry);
 	console.log(req.body);
 	console.log(req.text);
	res.send({ text: textEntry});
}
 
  app.get('/test', function (req, res) {
      res.send(mockAPIResponse)
  })

