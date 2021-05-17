const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({exteended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
});

app.post("/sum", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The answer is " + result);
});

app.post("/multiplication", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 * num2;
    res.send("The answer is " + result);
});

app.post("/division", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 / num2;
    res.send("The answer is " + result);
});

app.post("/substraction", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 - num2;
    res.send("The answer is " + result);
});

app.listen(3000, function(){
    console.log("server has started on port 3000")
});
