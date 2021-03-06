const express = require('express')
const app = express();
const http = require('http').createServer(app);

app.use(express.static('public'))
// Front-end
app.get('/', function (req, res) {res.sendFile(__dirname + '/index.html')})

// links
app.get('/mina-sidor', function (req, res) {res.sendFile(__dirname + '/pages/my-pages.html')})

http.listen(process.env.PORT || 3000, () => {console.log('server is running')});