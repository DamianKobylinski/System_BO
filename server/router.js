const express = require("express");
const mysql = require("mysql");
const passhash = require("password-hash");
const jwt = require("jsonwebtoken");
const router = express.Router();

require('dotenv').config();

const connectToDatabase = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE
});


router.post("/admin-login", (req, res) => {
    let loginUser = req.body.login;
    let passwordUser = req.body.password;
    let sqlTakeAdminUser = `SELECT * FROM admin_table WHERE username=` + mysql.escape(loginUser);
    try {
        connectToDatabase.query(sqlTakeAdminUser, (err, result) => {
            if (err) {
                throw err;
            } else {
                if (result.length <= 0) {
                    res.json({
                        error: "Don't have this user in the database.",
                        success: false,
                    });
                } else {
                    if (passhash.verify(passwordUser, result[0].password)) {
                        res.json({
                            token: jwt.sign(loginUser, process.env.TOKEN),
                            success: true,
                        });
                    } else {
                        res.json({
                            error: "Invalid password.",
                            success: false,
                        });
                    }
                }
            }
        });
    } catch (e) {
        console.log(e);
    }

});

router.post("/", (req, res) => {
    res.cookie("email", req.body.email, {
        maxAge: 24 * 60 * 60,
        secure: true,
        saveUninitialized: true,
        resave: true,
    })
    res.cookie("name", req.body.name, {
        maxAge: 24 * 60 * 60,
        secure: true,
        saveUninitialized: true,
        resave: true,
    })
    let setNewEngagePersonSQLQuery = `INSERT INTO newsletter_engage(name,email,engage_date, dlaczego_chcesz_przystapic_do_naszego_projektu, jakie_sa_twoje_umiejetnosci_i_mozliwosci,jakie_pomysly_chcialbys_zrealizowac, dlaczego_powinnismy_wybrac_wlasnie_ciebie, czy_potrafisz_programowac, czy_potrafisz_administrowac_bazami_danych, temat_kryptowalut) VALUES (?)`;
    let date = new Date();
    let valuesOfNewEngagePerson = [
        req.body.name,
        req.body.email,
        date,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ];
    if (req.body.name.length < 2 || req.body.email.length < 6) {
        console.log("Error: Valid username or email.");
    } else {
        connectToDatabase.query(setNewEngagePersonSQLQuery, [valuesOfNewEngagePerson], function (err) {
            if (err) {
                throw err;
            } else {
                res.json({
                    status: 200,
                });
            }
        });
    }
});


module.exports = router;