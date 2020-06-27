var express = require("express");
var app = express();
 var movieService = require("./movies/movie");
var genreService = require("./genres/genre");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://m220user:m220password@cluster0-c5pdt.mongodb.net/docker?retryWrites=true&w=majority', { useNewUrlParser: true });

app.get("/",(req,res)=>{
    res.send("Welcome to Node Api's")
})
app.use("/movies",movieService)
app.use("/genre",genreService)


module.exports = app;