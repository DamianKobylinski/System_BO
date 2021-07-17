const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const server = express();
const port = 2000;


server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(bodyParser.raw());

server.use(express.static(__dirname + "/public"));



server.post("/",(req,res)=>{
    var valuesFromNewsletterForm = {"name" : req.body.name,"email" : req.body.email};
    const connectToDatabase = mysql.createConnection({
        host: "mariadb105.interauto.nazwa.pl",
        user: "interauto_botodb",
        password: "sk(jD&shd&^^Sdhds9!sjEa"
    });

    connectToDatabase.connect((err)=>{
        if(err){
            throw err;
        }
        else{
            let setNewEngagePersonSQLQuery = `INNER INTO newsletter_engage("name","email") VALUES (${valuesFromNewsletterForm.name},${valuesFromNewsletterForm.email})`;
        }
    });
});

server.listen(port,()=>{
    console.log(`Listen: ${port} `);
});