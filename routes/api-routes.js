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
  app.get("/burgers", function(req, res) {
    db.burgers.findAll({})
    .then(function(results) {
       res.json(results);
    });
  });

  

  // POST route for saving a new burgers
  app.post("/burgers", function(req, res) {
    console.log(req.body);
    db.burgers.create({
      burger_name: req.body.name,
      devoured: req.body.devoured,
    }).then(function(results) {
      res.redirect("/");
    });

  });

  

  // PUT route for updating new burgers
  app.put("/burgers/:id", function(req, res) {
    db.burgers.update({devoured:true},
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(results) {
      res.json(results);
    });
  });
};
  
        

    
