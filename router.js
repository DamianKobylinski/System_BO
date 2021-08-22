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

let nameOfNewEngaged;
let emailOfNewEngaged;

router.post("/admin-panel", (req, res) => {
    if (req.body.isCheck === true) {
        let nameEngaged = req.body.username;
        let emailEngaged = req.body.email;
        let sqlTakeSpecificUser = `SELECT * FROM newsletter_engage WHERE name='${nameEngaged}' OR email='${emailEngaged}'`;
        connectToDatabase.query(sqlTakeSpecificUser, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.json({
                    status: 200,
                    users: result,
                });
            }
        });
    } else {
        let sqlTakeAllUsers = `SELECT * FROM newsletter_engage`;
        connectToDatabase.query(sqlTakeAllUsers, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.json({
                    status: 200,
                    users: result,
                });
            }
        });
    }
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

router.post("/form", (req, res) => {

    let queryUpdateFormOfTheNewEngaged = `UPDATE newsletter_engage SET dlaczego_chcesz_przystapic_do_naszego_projektu = '${req.body.whyJoin}', jakie_sa_twoje_umiejetnosci_i_mozliwosci = '${req.body.skills}',jakie_pomysly_chcialbys_zrealizowac = '${req.body.ideas}', dlaczego_powinnismy_wybrac_wlasnie_ciebie = '${req.body.whyYou}', czy_potrafisz_programowac = '${req.body.programmingSkills}', czy_potrafisz_administrowac_bazami_danych = '${req.body.databasesSkills}', temat_kryptowalut = '${req.body.cryptoKnowledge}' WHERE email='${emailOfNewEngaged}'`;

    try {
        connectToDatabase.query(queryUpdateFormOfTheNewEngaged, function (err, result) {
            if (err) {
                throw err;
            } else {
                res.json({
                    status: 200,
                    message: result,
                });
            }
        });
    } catch (e) {
        console.log("Update error: " + e);
    }
});

router.post("/", (req, res) => {
    nameOfNewEngaged = req.body.name;
    emailOfNewEngaged = req.body.email;
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

    connectToDatabase.query(setNewEngagePersonSQLQuery, [valuesOfNewEngagePerson], function (err) {
        if (err) {
            throw err;
        } else {
            res.json({
                status: 200,
            });
        }
    });
});


module.exports = router;