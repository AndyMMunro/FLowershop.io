// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
const sequelize = require("sequelize");
var app = express.Router();
// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
app.get("/", function (req, res) {
  res.render("index")
});

module.exports = app;