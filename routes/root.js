const SDC = require('statsd-client');
const router = require('express').Router();

const metrics = new SDC();

/* GET home page. */
router.get('/', function(req, res, next) {
  metrics.increment('inflapp.job_done');
  res.render('index', { title: 'Express' });
});

module.exports = router;
