// *********************************************************************************
// burgers_controller.js
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log("Here: ", hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers", function (req, res) {
  //ojo
  console.log("req - post:" + JSON.stringify(req, null, 2));
  burger.create(req.body.name, function (result) {
    // Send back the ID of the new burger
    res.json({id: result.insertId});
    res.redirect("/");
  });
});

router.put("/api/burgers/id", function (req, res) {
  //ojo
  console.log("req - put:" + JSON.stringify(req, null, 2));
  burger.update(req.body.burger_id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    };
    res.redirect("/");
  });
});

// Export routes for server.js to use
module.exports = router;