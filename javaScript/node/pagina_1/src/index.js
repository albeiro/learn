const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()


// Settings
app.set('port', 30000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

// Middlewares
//app.use(morgan('dev'))

//Routes
app.use(require('./routes/index'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Listening the server
app.listen(app.get('port'), () => console.log(`Example app listening on port: ${app.get('port')}`))