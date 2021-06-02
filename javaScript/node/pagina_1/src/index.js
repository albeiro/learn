const express = require('express')
const app = express()
const path = require('path')

app.set('port', 30000)
app.set('views', path.join( __dirname, 'views') )
app.set('view engine', 'ejs')

app.use(require('./routes/index'))

app.listen(app.get('port'), () => console.log(`Example app listening on port port!`))