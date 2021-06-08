const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
router.get("/api",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;