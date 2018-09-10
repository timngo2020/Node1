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
/*
var slots = [
  {'time': '9am-10am', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '10am-11am', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '11am-12pm', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '12pm-1pm', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '1pm-2m', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '2pm-3pm', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '3pm-4pm', 'color': 'LightGray', 'name': '', 'phone': ''},
  {'time': '4pm-5pm', 'color': 'LightGray', 'name': '', 'phone': ''}
];
*/
router.get('/', function(req, res, next) {
/*
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = 'select * from schedule';
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      res.send(JSON.stringify(result));
      console.log(result);
    });
  });
*/
res.send(JSON.stringify(slots));
console.log(slots);

});

module.exports = router;
