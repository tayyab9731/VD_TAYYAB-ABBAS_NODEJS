//using fetch api
const express = require ('express');
const app = express();

const fetch = require('node-fetch');


fetch('https://swapi.co/api/films').then((res)=>{
    return res.json();

}).then((json)=>{
    (app.get('/movies',(req,res)=>res.send(json)));
    app.listen(4000)

});
//to get movies with title the phantom menace
fetch('https://swapi.co/api/films/?search=The Phantom Menace').then((res)=>{
    return res.json();

}).then((json)=>{
    (app.get('/movies/The_Phantom_Menace',(req,res)=>res.send(json)));
    app.listen(5000)

});
    

