const path = require("path");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const logger = require("morgan");
const bodyParser = require("body-parser");

const index = require("./routes/index");

const app = express();

// View engine setup
app.engine("handlebars", expressHandlebars({defaultLayout: "app"}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// Catch 404 and render page not found template
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    res.render("pageNotFound");
});

// Error handler
app.use((err, req, res, next) => {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
