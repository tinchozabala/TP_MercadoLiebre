const express = require ("express");
const app = express();

app.get ("/", function (req, res){
res.sendFile (__dirname + "/views/index.html")
})

app.get ("/registro", function (req, res){
    res.sendFile (__dirname + "/views/registro.html")
})

app.get ("*", function (req, res){
    res.sendFile (__dirname + "/public" + req.url)
})

app.post ("/", function (req, res){
    res.redirect ("/")
})

app.listen (3000, function (){
    console.log ("para ver el sitio ingresa a http://localhost:3000")
})