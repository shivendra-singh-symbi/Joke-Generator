require ("dotenv").config();
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//to use static image files
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
})

app.get("/programming", function(req, res){

   let url = process.env.URLPROGRAMMING;

  console.log(url);

   https.get(url, function(response){
     response.on("data", function(data){

      data_json = JSON.parse(data);
      console.log(data_json);

      const jokeType = data_json[0].type;
      console.log(jokeType);
      const jokeSetup = data_json[0].setup;
      var jokePunchline = data_json[0].punchline;

      res.render("typeofjoke", {typeofJoke: jokeType, setupofJoke: jokeSetup, punchlineofJoke: jokePunchline});

     })
   })
});


app.get("/general", function(req, res){

   let url = process.env.URLGENERAL;

  console.log(url);

   https.get(url, function(response){
     response.on("data", function(data){

      data_json = JSON.parse(data);
      console.log(data_json);

      const jokeType = data_json[0].type;
      console.log(jokeType);
      const jokeSetup = data_json[0].setup;
      var jokePunchline = data_json[0].punchline;

      res.render("typeofjoke", {typeofJoke: jokeType, setupofJoke: jokeSetup, punchlineofJoke: jokePunchline});

     })
   })
});


app.get("/knock-knock", function(req, res){

   let url = process.env.URLKNOCKKNOCK;

  console.log(url);

   https.get(url, function(response){
     response.on("data", function(data){

      data_json = JSON.parse(data);
      console.log(data_json);

      const jokeType = data_json[0].type;
      console.log(jokeType);
      const jokeSetup = data_json[0].setup;
      var jokePunchline = data_json[0].punchline;

      res.render("typeofjoke", {typeofJoke: jokeType, setupofJoke: jokeSetup, punchlineofJoke: jokePunchline});

     })
   })
});

app.get("/random", function(req, res){

   let url = process.env.URLRANDOM;

  console.log(url);

   https.get(url, function(response){
     response.on("data", function(data){

      data_json = JSON.parse(data);

      const jokeType = data_json.type;
      const jokeSetup = data_json.setup;
      var jokePunchline = data_json.punchline;

      res.render("typeofjoke", {typeofJoke: jokeType, setupofJoke: jokeSetup, punchlineofJoke: jokePunchline});
     })
   })
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
  console.log("Server started on port 3000");
})
