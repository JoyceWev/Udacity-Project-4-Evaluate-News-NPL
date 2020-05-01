var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "fc1e63e7",
  application_key: "b773c9e3c2e30ac9e917791652b022d8"
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname);
console.log(textapi);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/sentiment', function (req, res) {
	textapi.sentiment({
		text: 'you are a stupid hoe',
		mode: 'Document' 
	},
	function(error, response) {
		if (error === null) {
		//add your code here for manipulating response }
		res.send(response)
		}
	})
});

