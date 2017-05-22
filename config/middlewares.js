var express = require("express");

module.exports = function(app){
  //middleware
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));
};
