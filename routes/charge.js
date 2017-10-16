var express = require('express');
var router = express.Router();
var stripe = require('stripe')(
  "sk_test_9gXbCG9wAEJ3HOFH5nvAFhJ0"
);

router.post("/charge", (req, res) => {
  let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "gbp",
         customer: customer.id
    }))
  .then(charge => res.render('charge'));
});

module.exports = router;
