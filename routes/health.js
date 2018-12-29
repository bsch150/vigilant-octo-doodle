var express = require('express');
var router = express.Router();

var START_TIME = new Date();

/* GET health check. */
router.get('/health', function(req, res, next) {
  res.status(200);
  res.send();
});

module.exports = router;
