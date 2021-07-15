const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routing = require("./routing.js");
const server = express();
const port = 2000;

server.use(express.static(__dirname + '/public'));

server.listen(port,()=>{
    console.log(`Listen: ${port} `);
});