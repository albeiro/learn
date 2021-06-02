
/**
 const math = require('./math.js');
 * console.log(math.add(2,3));
 * console.log(math.substract(2,3));
 * console.log(math.multiply(2,3));
 * console.log(math.divide(2,3));
 */

/*
const fs = require('fs');
fs.writeFile('./texto.txt', math.add(2,3), function(err){
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
    fs.readFile('./texto.txt',function (err, data) {
        if(err){
            console.log(err)
        }else{
            console.info(data.toString())
        }
     })
});
*/
/*
const http = require ('http')
const colors = require('colors')

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h1>4000 NodeJS<h1>');
    res.end();
    
}).listen(4000);


const handleServer = function (req, res) {
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h1>3000 NodeJS<h1>');
    res.end();
    
}

const server = http.createServer(handleServer);
server.listen(3000, function () {
    console.log('server 300'.green);
})

console.log('otro'.zebra);

*/

const colors = require('colors')
const express = require('express');

const server = express();

server.get('/',(req, res)=> res.send('bien chino'));
server.listen(3000, ()=> console.log("Expres arrow function".green));