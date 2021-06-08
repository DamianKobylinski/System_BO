const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routing = require("./routing.js");


const server = express();
const port = 2000;


server.use(bodyParser.json());
server.use(cors());

server.use("/",routing);

server.listen(port,()=>{
    console.log(`Listen: ${port} `);
});