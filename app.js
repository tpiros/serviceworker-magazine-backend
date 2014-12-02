'use strict';

var express = require('express'),
router      = express.Router(),
app         = express(),
routes      = require('./routes');

app.set('view engine', 'jade');
app.set('port', 8080);

// middlewears

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // never allow all (*)
  next();
});

router.route('/').get(routes.all);
app.use('/', router);

app.listen(app.get('port'));
console.log('The magic happens on port ' + app.get('port'));
