var express = require("express");
var router = express.Router();
var lowDb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var { nanoid } = require("nanoid");

const db = lowDb(new FileSync("db.json"));

/* GET home page. */
router
  .get("/", function (req, res, next) {
    const data = db.get("posts").value();
    res.render("home", { title: "Y-Share", data });
  })
  .post("/", function (req, res, next) {
    let { text_post } = req.body;
    let { ys_class } = req.query;
    db.get("posts")
      .push({ post: text_post, type: ys_class, id: nanoid() })
      .write();
    res.redirect("/home");
  });

module.exports = router;
