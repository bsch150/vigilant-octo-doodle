var express = require('express');
var router = express.Router();

var START_TIME = new Date();

/* GET health check. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.send();
});

module.exports = router;
