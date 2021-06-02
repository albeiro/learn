const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index', {title: 'Firts web site'})
})

router.get('/contac', (req, res) =>{
    res.render('contac', {title: 'Contact Page'})
})

module.exports =  router