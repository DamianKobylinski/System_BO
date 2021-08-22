const express = require("express");
const cookie_parser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require('passport');
const newsletterRouter = require("./router");
const server = express();
const port = 443;


server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(bodyParser.raw());
server.use(cookie_parser());
server.use(passport.initialize());
server.use(passport.session());
server.use("/", express.static(__dirname + "/public"));

server.use("/", newsletterRouter);

server.listen(port, () => {
    console.log(`Listen: ${port} `);
});