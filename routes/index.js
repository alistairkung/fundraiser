var express = require('express');
var router = express.Router();
var stripe = require('stripe')(
  "sk_test_9gXbCG9wAEJ3HOFH5nvAFhJ0"
);
/* GET home page. */
router.get('/', function(req, res, next) {
  var stripe = require('stripe')(
    "sk_test_9gXbCG9wAEJ3HOFH5nvAFhJ0"
  );
  stripe.balance.retrieve(function(err, balance) {
    var bal = balance;
    res.render('index', { title: 'Express', balance: bal.available[0].amount});
    // console.log(bal.available[0].amount);
  });
  //console.log(bal);
});
//console.log("log");
module.exports = router;
