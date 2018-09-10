'use strict';

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var slots = require('./../data/slots');
/*
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "schedule"
});
*/
router.put('/', function(req, res, next) {
  /*
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var slot = req.body;
    var sql = "update schedule set time = " + "\'" + slot.name +  "\'" + ", color = " + "\'" + slot.phone + "\'" + ", where time = " + "\'" + slot.time + "\'";
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  */
  slots = req.body;
  res.send('Schedule is updated');
});

module.exports = router;
