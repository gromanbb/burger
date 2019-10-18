// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");

// Set up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set up Static directory to be served
app.use(express.static("./public"));

// Set up Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Set up Routes
// =============================================================
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start the server to begin listening
// =============================================================
//app.listen(PORT);
app.listen(PORT, function () {
  // For debugging only
  console.log("Server listening on: http://localhost:" + PORT);
});