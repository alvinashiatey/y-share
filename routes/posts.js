var express = require('express');
var router = express.Router();
var lowDb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync")

const db = lowDb(new FileSync('db.json'))

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = db.get("posts").value()
  res.json(data)
});

module.exports = router;
