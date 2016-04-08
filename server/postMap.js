var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var assert = require("assert");
var TextSearch = require('./TextSearch.js');
var config = require('./config.js');

var jsonParser = bodyParser.json();
var router = express.Router();

var textSearch = new TextSearch(config.apiKey, config.outputFormat);

router.post('/form', jsonParser, function(request, response) {

  var search = request.body.gym;
  var parameters = {
       query: search
  };

  textSearch(parameters, function (error, res) {
    response.send(res.results)
    console.log(res);
  },

  function(error) {
    console.log(error);
  });
});

exports.api = router;
