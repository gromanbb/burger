// *********************************************************************************
// burgers_controller.js
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});



// Export routes for server.js to use
module.exports = router;