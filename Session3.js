 var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var DATA=[{
    "id":"1" ,"title":"Then Sorcerer Stone"
}]
app.use(bodyParser.json());


app.get('/books', function (req, res) {
    
    res.end(JSON.stringify(DATA));
});


app.delete('/books/:id', function(req, res) {
 
 
   var result = DATA.splice(req.param.id,1);
   console.log(result);
 res.send("Successfully deleted")
 
 });

app.post('/newbook', function (req, res) {
DATA.push(req.body);
res.send("success");

});


app.put('/newbook/:id', function(req, res) {
   let contact= DATA.filter(userId=>{return userId.id==req.params.id})[0];
 const index=DATA.indexOf(contact);
 const keys=Object.keys(req.body);
 keys.forEach(key=>{
     contact[key]=req.body[key];
  
});
DATA[index]=contact;
console.log(DATA);
   res.send("success");
   
 
  
  });
    var server = app.listen(3000, function () {

        var host = server.address().address
        var port = server.address().port

        console.log("Example app listening at http://%s:%s", host, port)

    })