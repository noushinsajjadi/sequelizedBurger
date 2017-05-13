// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.burgers.findAll({})
    .then(function(results) {
       res.json(results);
    });
  });

  

  // POST route for saving a new burgers
  app.post("/", function(req, res) {
    console.log(req.body);
    db.burgers.create({
      burger_name: req.body.name,
      devoured: req.body.devoured,
    }).then(function(results) {
      res.redirect("/");
    });

  });

  

  // PUT route for updating posts
  app.put("/:id", function(req, res) {
    db.burgers.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(burger) {
      res.redirect("/");
    });
  });
};
