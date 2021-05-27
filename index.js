require('dotenv').config()
const express = require('express')
const path = require('path')
const http = require('http')


const publicDirectoryPath = path.join(__dirname, '/public')
const port = process.env.PORT || 3001
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

////--------------------- Local --------------------

// ------------------------ End points -----------------------
app.post('/sumario/create', express.json(), (req, res) => {
	
})

app.get('/docentes', express.json() ,(req, res) => {
	
})

// ----------------------- Public file server ----------------
app.get('/', (req, res) => {
	res.sendFile(path.join(publicDirectoryPath + '/index.html'))
})

app.get('/user', (req, res) => {
	res.sendFile(path.join(publicDirectoryPath + '/user.html'))
})

app.get('/admin', (req, res) => {
	res.sendFile(path.join(publicDirectoryPath + '/admin.html'))
})

app.get('/sumario', (req, res) => {
	res.sendFile(path.join(publicDirectoryPath + '/createSumario.html'))
})

http.createServer(app).listen(port, () => {
	console.log(`Listening on port ${port}`)
})

// create https server
const httpsApp = express()

httpsApp.use(express.urlencoded({ extended: true }))

httpsApp.get('/', (req, res) => {
	return res.send('Test: Using HTTPS')
})

