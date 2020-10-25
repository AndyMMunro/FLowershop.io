// *** Dependencies
const express = require("express");
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");
// sets up handlebars


// sets up cookies app
app.use(cookieParser());

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// parseing app to JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// Routes
// =============================================================
const flowerRoutes = require('./routes/flowers-api-routes');
const htmlRoutes = require("./routes/html-routes");

app.use("/", htmlRoutes);
app.use("/api", flowerRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================


db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});