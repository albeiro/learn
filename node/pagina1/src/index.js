
const express = require('express')
const app = express()

//setting
app.set('port', 3000)

// middlewares

//routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/1', (req, res) => res.send('1-Hello World!'))

//static files
app.listen(app.get('port'), () => console.log(`Example app listening on port port!`))