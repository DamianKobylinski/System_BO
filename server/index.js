const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 2000;

const newsletterRouter = require("./router");

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(bodyParser.raw());

server.use(express.static(__dirname + "/public"));

server.use("/", newsletterRouter);

server.listen(port, () => {
    console.log(`Listen: ${port} `);
});